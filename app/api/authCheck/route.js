import { USER_ROLES } from "@/constants/userRoles";
import Admin from "@/models/admin";
import Client from "@/models/client";
import ServiceProvider from "@/models/serviceProvider";
import checkAuth from "@/utils/checkAuth";
import { errorResponse, successResponse } from "@/utils/sendResponse";
import { getUrl } from "@/utils/storage";

export const GET = async (req) => {
  try {
    const userId = await checkAuth(req);
    if (!userId) return errorResponse(403, "Logged out");

    const UserRoleModels = [Admin, ServiceProvider, Client];
    let user;
    let role;

    for (const Model of UserRoleModels) {
      user = await Model.findById(userId);
      if (user) {
        if (Model === Admin) role = USER_ROLES.admin;
        if (Model === ServiceProvider) role = USER_ROLES.serviceProvider;
        if (Model === Client) role = USER_ROLES.client;
        break;
      }
    }

    if (!user) {
      const response = errorResponse(403, "Logged out");
      response.cookies.delete("token");
      return response;
    }

    if (user.profilePicture)
      user.profilePicture = await getUrl(user.profilePicture);

    return successResponse(200, "Logged in", { user: { ...user._doc, role } });
  } catch (error) {
    return errorResponse(500, error.message);
  }
};
