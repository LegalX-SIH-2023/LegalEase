import Admin from "@/models/admin";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";
import { getUrl } from "@/utils/storage";

export const GET = async (req) => {
  try {
    const adminId = await checkAuth(req);
    if (!adminId) return errorResponse(403, "Please login first");

    const admin = await Admin.findById(adminId);
    if (!admin) return errorResponse(403, "Account not found");

    const serviceProviders = await ServiceProvider.find({
      verificationStatus: { status: "Pending" },
    });

    await Promise.all(
      serviceProviders.map(async ({ profilePicture }, index) => {
        serviceProviders[index].profilePicture = await getUrl(profilePicture);
      })
    );

    return successResponse(
      200,
      "Service Providers with Verification Pending",
      serviceProviders
    );
  } catch (error) {
    return errorResponse();
  }
};
