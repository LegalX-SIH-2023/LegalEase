"use client";

import { HTTP_METHODS } from "@/constants/httpMethods";
import httpRequest from "@/utils/httpRequest";
import { useEffect, useState } from "react";
const AdminDashboardServiceProviderDetails = ({
  params: { serviceProviderId },
}) => {
  const [serviceProviderDetails, setServiceProvideDetails] = useState({});

  useEffect(() => {
    httpRequest(
      `/api/admin/serviceProviderVerification/${serviceProviderId}`,
      HTTP_METHODS.GET
    ).then((res) => {
      if (res.success) {
        setServiceProvideDetails(res.data);
      } else {
        alert(res.message);
      }
    });
  }, []);

  const acceptVerification = (message) => {
    httpRequest(
      `/api/admin/serviceProviderVerification/${serviceProviderId}`,
      HTTP_METHODS.PATCH,
      { message }
    ).then((res) => {
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  };

  const rejectVerification = (message) => {
    httpRequest(
      `/api/admin/serviceProviderVerification/${serviceProviderId}`,
      HTTP_METHODS.PUT,
      { message }
    ).then((res) => {
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  };
  return (
    <>
      <div>{serviceProviderId}</div>
      {JSON.stringify(serviceProviderDetails)}
      <button
        className="bg-green-500"
        onClick={() => acceptVerification("Welcome")}
      >
        Accept
      </button>
      <button
        className="bg-red-500"
        onClick={() => rejectVerification("Sorry")}
      >
        Reject
      </button>
    </>
  );
};

export default AdminDashboardServiceProviderDetails;
