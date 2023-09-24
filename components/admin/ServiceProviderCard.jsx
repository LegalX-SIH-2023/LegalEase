import React from "react";
import Link from "next/link";

export default function ServiceProviderCard(props) {
  const imageUrl = props.serviceProvidersDetail["profilePicture"];
  const name = props.serviceProvidersDetail["name"];
  const experience = props.serviceProvidersDetail["experience"];
  const skills = props.serviceProvidersDetail["skills"];
  const id = props.serviceProvidersDetail["_id"];

  return (
    <div className=" p-4">
      <div className=" rounded-lg p-4 mx-auto bg-primary-lightGray shodow-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border-2  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="text-center flex ">
          <img
            src={imageUrl}
            alt="Profile"
            className="object-cover object-center w-[20%] rounded-[50%] min-w-[100px] min-h-[100px]"
            style={{ maxHeight: "20%" }}
          />
          <div className="self-start ml-[5%]">
            <h2 className="text-2xl md:text-xl text-primary-navy font-semibold text-left">
              {name}
            </h2>
            <p className="text-gray-500 text-sm text-left">
              {experience} years of experience
            </p>
            <div className="mt-2 text-left">
              <span className="text-lg text-left font-semibold   text-primary-navy">
                Skills:{" "}
              </span>
              {skills?.map((skill, i) => (
                <span key={`service_provider_skill_${i}`}>
                  {i ? `, ${skill}` : skill}
                </span>
              ))}

              {/* <ul className="list-disc list-inside"> */}

              {/* </ul> */}
            </div>
          </div>
        </div>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-center">
          <Link
            href={`/admin/dashboard/serviceProviders/${id}`}
            className="text-primary underline"
          >
            <button className="bg-primary-navy text-primary-light hover:shadow-xl ease-in-out mt-4 py-2 rounded-md font-bold px-2">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
