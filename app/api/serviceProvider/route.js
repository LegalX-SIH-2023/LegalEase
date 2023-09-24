import { connectDB } from "@/config/database";
import { VERIFICATION_STATUS } from "@/constants/verificationStatus";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";

export const GET = async (req) => {
  try {
    const serviceProviderId = await checkAuth(req);
    if (!serviceProviderId) return errorResponse(403, "Please login first");

    await connectDB();
    const serviceProvider = await ServiceProvider.findById(
      serviceProviderId
    ).populate([
      "documents.aadharCard",
      "documents.panCard",
      "documents.qualification",
    ]);
    if (!serviceProvider) return errorResponse(404, "Account not found");

    if (
      serviceProvider.verificationStatus.status !==
      VERIFICATION_STATUS.Incomplete
    ) {
      const { aadharCard, panCard, qualification } = serviceProvider.documents;

      serviceProvider.profilePicture = `/api/file/${serviceProvider.profilePicture}`;
      serviceProvider.documents.aadharCard.path = `/api/file/${aadharCard.path}`;
      serviceProvider.documents.panCard.path = `/api/file/${panCard.path}`;
      serviceProvider.documents.qualification.path = `/api/file/${qualification.path}`;
    }

    return successResponse(200, "Account Details", serviceProvider);
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
