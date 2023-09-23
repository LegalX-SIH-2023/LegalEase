import { errorResponse, successResponse } from "@/utils/sendResponse";
import { connectDB } from "@/config/database";
import uploadDocument from "@/utils/uploadDocument";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { upload } from "@/utils/storage";

export const POST = async (req) => {
  try {
    const serviceProviderId = await checkAuth(req);
    if (!serviceProviderId) return errorResponse(403, "Please login first");

    await connectDB();

    let serviceProvider = await ServiceProvider.findById(serviceProviderId);
    if (!serviceProvider) return errorResponse(403, "Account not found");
    if(serviceProvider.isVerified) return errorResponse(409, "Account already verified");

    const form = Object.fromEntries(await req.formData());
    const {
      profilePicture,
      aadharCard,
      panCard,
      qualification,
      experience,
      skills,
    } = form;

    if (
      !profilePicture ||
      !aadharCard ||
      !panCard ||
      !qualification ||
      !experience ||
      !skills
    )
      return errorResponse(400, "Please fill all fields");

    let profilePictureBuffer = Buffer.from(await profilePicture.arrayBuffer());

    const profilePicturePath = await upload(
      "Profile Pictures",
      profilePicture.name,
      profilePictureBuffer
    );

    const aadharCardDocument = await uploadDocument(
      "Aadhar Card",
      aadharCard,
      "Service-Provider-Verification-Documents"
    );

    const panCardDocument = await uploadDocument(
      "Pan Card",
      panCard,
      "Service-Provider-Verification-Documents"
    );

    const qualificationDocument = await uploadDocument(
      "Qualification",
      qualification,
      "Service-Provider-Verification-Documents"
    );

    await ServiceProvider.findByIdAndUpdate(serviceProviderId, {
      $set: {
        documents: {
          aadharCard: aadharCardDocument,
          panCard: panCardDocument,
          qualification: qualificationDocument,
        },
        profilePicture: profilePicturePath,
        experience: Number(experience),
        skills: JSON.parse(skills),
        verificationStatus: { status: "Pending" },
      },
    });

    return successResponse(200, "Account Submitted for Verification");
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
