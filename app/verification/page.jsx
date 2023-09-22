import React from "react";

const Verification = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-6 sm:w-1/2 mx-auto my-20">
          <h1 className="text-5xl font-bold">Verification</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-2xl">
              Upload Aadhar Card
            </label>
            <input className="block" type="file"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-2xl">
              Upload Pan Card
            </label>
            <input className="block" type="file"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-2xl">
              Upload Degree
            </label>
            <input className="block" type="file"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-2xl">
              Upload Essential Document1
            </label>
            <input className="block" type="file"></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-2xl">
              Upload Essential Document2
            </label>
            <input className="block" type="file"></input>
          </div>
          <button className="bg-primary py-4 text-white rounded-lg text-lg">
            Submit Documents
          </button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
