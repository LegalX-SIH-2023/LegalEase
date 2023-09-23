"use client";

import { HTTP_METHODS } from "@/constants/httpMethods";
import httpRequest from "@/utils/httpRequest";
import { useEffect, useState } from "react";

const AdminDashboardPendingVerifications = () => {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    httpRequest(
      `/api/admin/serviceProviderVerification?status=Pending`,
      HTTP_METHODS.GET
    ).then((res) => {
      if (res.success) {
        setServiceProviders(res.data);
      } else {
        alert(res.message);
      }
    });
  }, []);
  return (
    <>
      <div>AdminDashboardServiceProvidersPendingVerifications</div>
      {JSON.stringify(serviceProviders)}
    </>
  );
};

export default AdminDashboardPendingVerifications;
