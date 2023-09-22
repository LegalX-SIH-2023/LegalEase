import { connectDB } from "@/config/database";
import Admin from "@/models/admin";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";
import { getUrl } from "@/utils/storage";

export const GET = async (req, { params: { serviceProviderId } }) => {
  try {
    const adminId = await checkAuth(req);
    if (!adminId) return errorResponse(403, "Please login first");

    await connectDB();

    const admin = await Admin.findById(adminId);
    if (!admin) return errorResponse(403, "Account not found");

    const serviceProvider = await ServiceProvider.findById(
      serviceProviderId
    ).populate([
      "documents.aadharCard",
      "documents.panCard",
      "documents.qualification",
    ]);
    if (!serviceProvider)
      return errorResponse(404, "Service Provider not found");

    const { aadharCard, panCard, qualification } = serviceProvider.documents;

    serviceProvider.profilePicture = await getUrl(
      serviceProvider.profilePicture
    );
    serviceProvider.documents.aadharCard.path = await getUrl(aadharCard.path);
    serviceProvider.documents.panCard.path = await getUrl(panCard.path);
    serviceProvider.documents.qualification.path = await getUrl(
      qualification.path
    );

    return successResponse(200, "Service Provider Details", serviceProvider);
  } catch (error) {
    return errorResponse(500, error.message);
  }
};

export const PATCH = async (req, { params: { serviceProviderId } }) => {
  try {
    const adminId = await checkAuth(req);
    if (!adminId) return errorResponse(403, "Please login first");

    await connectDB();

    const admin = await Admin.findById(adminId);
    if (!admin) return errorResponse(403, "Account not found");

    const serviceProvider = await ServiceProvider.findById(serviceProviderId);
    if (!serviceProvider)
      return errorResponse(404, "Service Provider not found");
    if (serviceProvider.isVerified)
      return errorResponse(409, "Service Provider Already Verified");

    serviceProvider.verificationStatus = undefined;
    serviceProvider.isVerified = true;

    await serviceProvider.save();

    return successResponse(200, "Service Provider Verified");
  } catch (error) {
    return errorResponse(500, error.message);
  }
};

export const PUT = async (req, { params: { serviceProviderId } }) => {
  try {
    const adminId = await checkAuth(req);
    if (!adminId) return errorResponse(403, "Please login first");

    await connectDB();

    const admin = await Admin.findById(adminId);
    if (!admin) return errorResponse(403, "Account not found");

    const serviceProvider = await ServiceProvider.findById(serviceProviderId);
    if (!serviceProvider)
      return errorResponse(404, "Service Provider not found");

    const { message } = await req.json();
    if (!message) return errorResponse(400, "Please enter rejection message");

    serviceProvider.verificationStatus = { status: "Rejected", message };
    serviceProvider.isVerified = false;

    await serviceProvider.save();

    return successResponse(200, "Service Provider Rejected");
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
