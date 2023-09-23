import { VERIFICATION_STATUS } from "@/constants/verificationStatus";
import Admin from "@/models/admin";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";
import { getUrl } from "@/utils/storage";

export const GET = async (req) => {
  try {
    const status = req.nextUrl?.searchParams?.get("status");

    if (!Object.values(VERIFICATION_STATUS).includes(status))
      return errorResponse(400, "Invalid Verification Status");

    const adminId = await checkAuth(req);
    if (!adminId) return errorResponse(403, "Please login first");

    const admin = await Admin.findById(adminId);
    if (!admin) return errorResponse(403, "Account not found");

    const serviceProviders = await ServiceProvider.find({
      "verificationStatus.status": status,
    });

    await Promise.all(
      serviceProviders.map(async ({ profilePicture }, index) => {
        serviceProviders[index].profilePicture = await getUrl(profilePicture);
      })
    );

    return successResponse(
      200,
      `Service Providers with Verification ${status}`,
      serviceProviders
    );
  } catch (error) {
    console.log(error);
    return errorResponse(500, error.message);
  }
};
