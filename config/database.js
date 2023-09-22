import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "Development" });
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
