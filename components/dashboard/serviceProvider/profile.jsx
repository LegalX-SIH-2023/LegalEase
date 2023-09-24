"use client";
import { HTTP_METHODS } from "@/constants/httpMethods";
import httpRequest from "@/utils/httpRequest";
import React, { useEffect, useState } from "react";

const DashboardServiceProviderProfile = () => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    httpRequest("/api/serviceProvider", HTTP_METHODS.GET).then((res) => {
      if (res.success) {
        setUserDetails(res.data);
      } else {
        alert(res.message);
      }
    });
  }, []);
  return <>{JSON.stringify(userDetails)}</>;
};

export default DashboardServiceProviderProfile;
