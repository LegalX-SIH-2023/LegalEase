"use client";

import { HTTP_METHODS } from "@/constants/httpMethods";
import httpRequest from "@/utils/httpRequest";
import { useEffect, useState } from "react";
const AdminDashboardServiceProviderDetails = ({
  params: { serviceProviderId },
}) => {
  const [serviceProviderDetails, setServiceProvideDetails] = useState({});
  const [qualifications, setIsQualificationSelected] = useState(true);
  const [aadharCard, setIsAadharCardSelected] = useState(false);
  const [panCard, setIsPanCardSelected] = useState(false);
  const [reviewMessage, setReviewMessage] = useState();

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
      <section className="flex flex-col justify-center items-center">
        <p className="text-center text-4xl text-primary-navy font-semibold my-12">
          Profile Details
        </p>
        <div className="flex justify-center items-center gap-10 p-2">
          <img
            src={serviceProviderDetails.profilePicture}
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
              Skills:{" "}
              {serviceProviderDetails.skills?.map((skill, i) => (
                <span key={`service_provider_skill_${i}`}>
                  {i ? `, ${skill}` : skill}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="bg-primary-lightGray p-1 rounded-xl flex gap-2 mt-12">
          <button
            className={`${
              qualifications
                ? "bg-primary-navy text-white"
                : "bg-white text-primary-dark"
            }
          bg-primary-navy text-xl rounded-xl m-1 p-2 hover:bg-primary-navy hover:text-white duration-500`}
            onClick={() => {
              setIsQualificationSelected(true);
              setIsAadharCardSelected(false);
              setIsPanCardSelected(false);
            }}
          >
            Qualifications
          </button>
          <button
            className={`${
              aadharCard
                ? "bg-primary-navy text-white"
                : "bg-white text-primary-dark"
            }
          bg-primary-navy text-xl rounded-xl m-1 p-2 hover:bg-primary-navy hover:text-white duration-500`}
            onClick={() => {
              setIsQualificationSelected(false);
              setIsAadharCardSelected(true);
              setIsPanCardSelected(false);
            }}
          >
            Aadhar Card
          </button>
          <button
            className={`${
              panCard
                ? "bg-primary-navy text-white"
                : "bg-white text-primary-dark"
            }
          bg-primary-navy text-xl rounded-xl m-1 p-2 hover:bg-primary-navy hover:text-white duration-500`}
            onClick={() => {
              setIsQualificationSelected(false);
              setIsAadharCardSelected(false);
              setIsPanCardSelected(true);
            }}
          >
            Pan Card
          </button>
        </div>
        <div>
          {serviceProviderDetails.documents && qualifications && (
            <iframe
              src={serviceProviderDetails.documents.qualification.path}
              className="md:w-[400px] md:h-[600px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
          {serviceProviderDetails.documents && aadharCard && (
            <iframe
              src={serviceProviderDetails.documents.aadharCard.path}
              className="md:w-[400px] md:h-[500px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
          {serviceProviderDetails.documents && panCard && (
            <iframe
              src={serviceProviderDetails.documents.panCard.path}
              className="md:w-[400px] md:h-[600px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center mt-20 mdf:gap-0 gap-2">
          <label
            htmlFor="Join Us:"
            className="text-3xl text-primary-navy font-semibold mr-4"
          >
            Message:
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Message.."
              className="rounded-xl bg-primary-lightGray md:w-[300px] w-[200px] p-2"
              onChange={(e) => setReviewMessage(e.target.value)}
            />
            <button
              className="font-semibold px-2 py-1 bg-red-500 rounded-xl text-white text-xl hover:shadow-md"
              onClick={() => rejectVerification(reviewMessage)}
            >
              Reject
            </button>
            <button
              className="p-2 bg-green-500 rounded-xl px-4 text-xl font-semibold text-white hover:shadow-md"
              onClick={() => acceptVerification(reviewMessage)}
            >
              Accept
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboardServiceProviderDetails;
