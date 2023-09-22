import { connectDB } from "@/config/database";
import ServiceProvider from "@/models/serviceProvider";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      return errorResponse(400, "Please fill all fields");

    await connectDB();

    let serviceProvider = await ServiceProvider.findOne({ email });
    if (serviceProvider)
      return errorResponse(409, "Account already exist with this email");

    serviceProvider = await ServiceProvider.create({
      name,
      email,
      password,
    });

    serviceProvider.password = undefined;

    const token = serviceProvider.generateToken();

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
