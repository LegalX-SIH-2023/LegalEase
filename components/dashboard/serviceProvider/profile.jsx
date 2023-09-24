"use client";
import { HTTP_METHODS } from "@/constants/httpMethods";
import { VERIFICATION_STATUS } from "@/constants/verificationStatus";
import { AuthContext } from "@/providers/contextProvider";
import httpRequest from "@/utils/httpRequest";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const DashboardServiceProviderProfile = () => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    httpRequest("/api/serviceProvider", HTTP_METHODS.GET).then((res) => {
      if (res.success) {
        console.log("res", res.data);
        setUserDetails(res.data);
      } else {
        alert(res.message);
      }
    });
  }, []);
  console.log("userdetail", userDetails);
  // const first = useContext(AuthContext);
  // // console.log("provider", first);

  const getStatusDesign = () => {
    if (
      userDetails?.verificationStatus?.status === VERIFICATION_STATUS?.Pending
    )
      return "text-orange-500 bg-orange-100";
    else if (
      userDetails?.verificationStatus?.status === VERIFICATION_STATUS?.Verified
    )
      return "text-green-500 bg-green-100";
    else if (
      userDetails?.verificationStatus?.status === VERIFICATION_STATUS?.Rejected
    )
      return "text-red-500 bg-red-100";
    else return "text-yellow-500 bg-yellow-100";
  };

  const [qualifications, setIsQualificationSelected] = useState(true);
  const [aadharCard, setIsAadharCardSelected] = useState(false);
  const [panCard, setIsPanCardSelected] = useState(false);

  return (
    <>
      {/* {JSON.stringify(userDetails)} */}
      <section className="flex flex-col justify-center items-center">
        <p className="text-center text-4xl text-primary-navy font-semibold my-12">
          Profile Details
        </p>
        <div className="flex justify-center items-center gap-10 p-2">
          <img
            src={userDetails?.profilePicture}
            alt="profile"
            className="h-[150px] w-[150px] p-4 bg-primary-lightGray rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text- text-3xl text-primary font-semibold">
              {userDetails?.name}
            </p>
            <p className="text- text-xl text-primary-mediumGray">
              Experience: {userDetails?.experience} yrs
            </p>
            <p className="text- text-xl text-primary-mediumGray">
              Skills:{" "}
              {userDetails?.skills?.map((skill, i) => (
                <span key={`service_provider_skill_${i}`}>
                  {i ? `, ${skill}` : skill}
                </span>
              ))}
            </p>
            <p>
              <button
                className={`text-xs py-1 px-4 ${getStatusDesign()} inline rounded-lg`}
              >
                {userDetails?.verificationStatus.status}
              </button>
            </p>
            {/* <button>{userDetails?.verificationStatus.status}</button> */}
          </div>
        </div>

        {(userDetails?.verificationStatus?.status ===
          VERIFICATION_STATUS?.Rejected ||
          userDetails?.verificationStatus?.status ===
            VERIFICATION_STATUS?.Incomplete) && (
          <p className="text-sm text-gray-700 mt-4 mb-2">
            <span className="font-semibold">Admin Review: </span>
            {userDetails?.verificationStatus?.message}
          </p>
        )}

        {(userDetails?.verificationStatus?.status ===
          VERIFICATION_STATUS?.Rejected ||
          userDetails?.verificationStatus?.status ===
            VERIFICATION_STATUS?.Incomplete) && (
          <div className="mt-1">
            <Link href="/dashboard/profile/verification">
              <button className="bg-primary px-4 text-white py-2 rounded-lg">
                {userDetails?.verificationStatus?.status ===
                VERIFICATION_STATUS?.Rejected
                  ? "Reverify Documents"
                  : "Complete Documents"}
              </button>
            </Link>
          </div>
        )}

        <div className="bg-primary-lightGray p-1 rounded-xl flex gap-2 mt-12">
          <button
            className={`${
              qualifications ? "bg-primary-navy text-white" : "bg-white text-primary-dark"
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
              aadharCard ? "bg-primary-navy text-white" : "bg-white text-primary-dark"
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
              panCard ? "bg-primary-navy text-white" : "bg-white text-primary-dark"
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
          {userDetails?.documents && qualifications && (
            <iframe
              src={userDetails?.documents.qualification.path}
              className="md:w-[400px] md:h-[600px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
          {userDetails?.documents && aadharCard && (
            <iframe
              src={userDetails?.documents.aadharCard.path}
              className="md:w-[400px] md:h-[500px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
          {userDetails?.documents && panCard && (
            <iframe
              src={userDetails?.documents.panCard.path}
              className="md:w-[400px] md:h-[600px] h-[300px] w-[300px] m-4 mt-8 rounded-xl border-none"
              type="application/pdf"
              allow="fullscreen"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardServiceProviderProfile;
