import { connectDB } from "@/config/database";
import Client from "@/models/client";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return errorResponse(400, "Please fill all fields");

    await connectDB();

    const client = await Client.findOne({ email }).select("+password");
    if (!client) return errorResponse(403, "Incorrect Credentials");

    const isPasswordMatch = await client.matchPassword(password);
    if (!isPasswordMatch) return errorResponse(403, "Incorrect Credentials");

    client.password = undefined;

    const token = client.generateToken();

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
