"use client";
import DashboardClientProfile from "@/components/dashboard/client/profile";
import DashboardServiceProviderProfile from "@/components/dashboard/serviceProvider/profile";
import { USER_ROLES } from "@/constants/userRoles";
import { AuthContext } from "@/providers/contextProvider";
import React, { useContext } from "react";

const UserProfile = () => {
  const { userDetails } = useContext(AuthContext);

  if (userDetails?.role === USER_ROLES.serviceProvider)
    return <DashboardServiceProviderProfile />;
  if (userDetails?.role === USER_ROLES.client)
    return <DashboardClientProfile />;
};

export default UserProfile;
