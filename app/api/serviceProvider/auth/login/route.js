import { connectDB } from "@/config/database";
import ServiceProvider from "@/models/serviceProvider";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password) return errorResponse(400, "Please fill all fields");

    await connectDB();

    const serviceProvider = await ServiceProvider.findOne({ email }).select(
      "+password"
    );
    if (!serviceProvider) return errorResponse(403, "Incorrect Credentials");

    const isPasswordMatch = await serviceProvider.matchPassword(password);
    if (!isPasswordMatch) return errorResponse(403, "Incorrect Credentials");

    serviceProvider.password = undefined;

    const token = serviceProvider.generateToken();

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
