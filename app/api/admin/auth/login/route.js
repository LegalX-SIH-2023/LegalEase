import { connectDB } from "@/config/database";
import Admin from "@/models/admin";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return errorResponse(400, "Please fill all fields");

    await connectDB();

    const admin = await Admin.findOne({ email }).select("password");
    if (!admin) return errorResponse(403, "Incorrect Credentials");

    const isPasswordMatch = await admin.matchPassword(password);
    if (!isPasswordMatch) return errorResponse(403, "Incorrect Credentials");

    admin.password = undefined;

    const token = admin.generateToken();

    const response = successResponse(200, "Login Successful");

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
