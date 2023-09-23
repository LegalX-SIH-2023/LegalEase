"use client";

import { HTTP_METHODS } from "@/constants/httpMethods";
import ServiceProviderCard from "@/components/admin/ServiceProviderCard"
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
        // console.log(res.data)
        setServiceProviders(res.data);
      } else {
        alert(res.message);
      }
    });
  }, []);

  console.log(serviceProviders);

  const arr = serviceProviders.map((data) =>  <ServiceProviderCard key={data["_id"]} serviceProvidersDetail={data} ></ServiceProviderCard>  );

  return (
    <>
      <h1 className="text-center text-4xl text-primary-navy font-semibold py-4">Pending Verifications</h1>
      {/* {JSON.stringify(serviceProviders)} */}
      <div className="flex justify-center flex-col sm:flex-row">
        {arr}
      </div>
    </>
  );
};

export default AdminDashboardPendingVerifications;
