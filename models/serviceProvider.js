import { Schema, model, models } from "mongoose";
import Document from "@/models/document";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { VERIFICATION_STATUS } from "@/constants/verificationStatus";

const { String, Number, Boolean, ObjectId } = Schema.Types;
Document;

const serviceProviderSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, select: false },
    password: { type: String, required: true, select: false },
    profilePicture: { type: String },
    documents: {
      aadharCard: { type: ObjectId, ref: "Document" },
      panCard: { type: ObjectId, ref: "Document" },
      qualification: { type: ObjectId, ref: "Document" },
    },
    experience: { type: Number },
    skills: [{ type: "String" }],
    verificationStatus: {
      status: { type: String, default: VERIFICATION_STATUS.Incomplete },
      message: { type: String },
    },
  },
  { versionKey: false }
);

serviceProviderSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

serviceProviderSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

serviceProviderSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

const ServiceProvider =
  models.ServiceProvider || model("ServiceProvider", serviceProviderSchema);

export default ServiceProvider;
