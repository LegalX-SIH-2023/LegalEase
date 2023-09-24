import { connectDB } from "@/config/database";
import Admin from "@/models/admin";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      return errorResponse(400, "Please fill all fields");

    await connectDB();

    let admin = await Admin.findOne({ email })
    if (admin)
      return errorResponse(409, "Account already exist with this email");

    admin = await Admin.create({
      name,
      email,
      password,
    });

    admin.password = undefined;

    const token = admin.generateToken();

    const response = successResponse(200, "Signup Successful");

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
