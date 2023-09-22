import { Schema, model, models } from "mongoose";

const { String, Number, Boolean, ObjectId } = Schema.Types;

const documentSchema = new Schema(
  {
    name: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { versionKey: false }
);

const Document = models.Document || model("Document", documentSchema);

export default Document;
