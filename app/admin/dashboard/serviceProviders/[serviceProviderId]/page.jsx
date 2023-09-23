"use client";
// import { Document, Page } from 'react-pdf';
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
      {console.log(serviceProviderDetails)}
      {/* {console.log(serviceProviderDetails.documents.panCard.path)} */}
      {/* <div>{serviceProviderId}</div>
      {JSON.stringify(serviceProviderDetails)} */}
      <section className="flex flex-col justify-center items-center">
        <p className="text-center text-4xl text-primary-navy font-semibold my-12">
          Profile Details
        </p>
        <div className="flex justify-center items-center gap-10 p-2">
          <img
            src={serviceProviderDetails.profilePicture}
            alt="profile"
            className="h-[150px] w-[150px] p-4 bg-primary-lightGray rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text- text-3xl text-primary font-semibold">
              {serviceProviderDetails.name}
            </p>
            <p className="text- text-xl text-primary-mediumGray">
              Experience: {serviceProviderDetails.experience} yrs
            </p>
            <p className="text- text-xl text-primary-mediumGray">
              Skills: {" "}
              {serviceProviderDetails.skills?.map((skill, i) => (
                <span key={`service_provider_skill_${i}`}> 
                   {i ? `, ${skill}` : skill}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="bg-primary-lightGray p-1 rounded-xl flex gap-2 mt-12">
          <button className="bg-primary-navy text-xl text-white rounded-xl m-1 p-2">
            Qualifications
          </button>
          <button className="bg-white text-xl rounded-xl m-1 p-2">
            Aadhar Card
          </button>
          <button className="bg-white text-xl rounded-xl m-1 p-2">
            Pan Card
          </button>
        </div>
        <div>
          {serviceProviderDetails.documents && (
            <iframe
              src={serviceProviderDetails.documents.panCard.path + "#toolbar=0"}
              className="w-[400px] h-[400px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf" 
              allow="fullscreen"
            />
          )}
        </div>
      </section>
      {/* <button
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
      </button> */}
    </>
  );
};

export default AdminDashboardServiceProviderDetails;
