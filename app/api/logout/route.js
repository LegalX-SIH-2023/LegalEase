import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const POST = async (req) => {
  try {
    const userId = await checkAuth(req);
    if (!userId) return errorResponse(403, "Please login first");

    const response = successResponse(200, "Logout Successful");
    response.cookies.delete("token");

    return response;
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
