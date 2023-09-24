import { AuthContext } from "@/providers/contextProvider";
import React, { useContext } from "react";

const DashboardClientProfile = () => {
  const { userDetails } = useContext(AuthContext);
  return <>{JSON.stringify(userDetails)}</>;
};

export default DashboardClientProfile;
