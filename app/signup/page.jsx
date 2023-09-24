"use client";

import React, { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import httpRequest from "@/utils/httpRequest";
import { HTTP_METHODS } from "@/constants/httpMethods";
import { CommonContext } from "@/providers/contextProvider";
import { useRouter } from "next/navigation";

const CreateAccount = () => {
  const { isUserLoggedIn, setAuthCheck } = useContext(CommonContext);
  const router = useRouter();
  const [user, setUser] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    httpRequest(
      `/api/${user ? "client" : "serviceProvider"}/auth/signup`,
      HTTP_METHODS.POST,
      { name, email, password }
    ).then((res) => {
      if (res.success) {
        alert(res.message);
        setAuthCheck(true)
      } else {
        alert(res.message);
      }
    });
  };
  useEffect(() => {
    if (isUserLoggedIn) {
      router.replace("/dashboard");
    }
  }, [isUserLoggedIn]);
  return (
    <main className=" font-poppins">
      <div className="grid grid-flow-row gap-4 sm:gap-0 sm:grid-cols-2 h-screen">
        <div className="flex justify-center align-middle bg-[#FFFFFF] pb-2 sm:pb-0">
          <div className="m-auto">
            {/* <img src={voiceImage} alt="" /> */}
            <Image
              src="/lawyerImage.jpg"
              alt="anu"
              width="500"
              height="500"
              className="mx-auto max-w-full h-auto"
            />
            <h1 className="text-white text-center text-md sm:text-3xl mt-3">
              <span className="text-primary-navy">Create Account</span>
            </h1>
          </div>
        </div>
        <div className="px-5 sm:px-10 lg:px-24 flex flex-col justify-center">
          <div className="flex justify-center mb-4 gap-2">
            <button
              className={`${
                user === 0
                  ? "bg-primary-navy text-white"
                  : "bg-white text-primary-navy border-2 border-[#2EADC5]"
              } px-4 py-1 rounded-md font-bold `}
              onClick={() => setUser(0)}
            >
              Service Provider
            </button>
            <button
              className={`${
                user === 1
                  ? "bg-primary-navy text-white"
                  : "bg-white text-primary-navy border-2 border-primary-navy"
              } px-4 py-1 rounded-md font-bold`}
              onClick={() => setUser(1)}
            >
              Client
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              register();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold" htmlFor="username">
                Your Name
              </label>
              <div className=" relative overflow-hidden">
                <BiUser
                  size={18}
                  className="absolute top-4 left-3 text-[#929298]"
                ></BiUser>
                <input
                  className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold" htmlFor="username">
                Your Email
              </label>
              <div className=" relative overflow-hidden">
                <MdOutlineMailOutline
                  size={18}
                  className="absolute top-4 left-3 text-[#929298]"
                ></MdOutlineMailOutline>
                <input
                  className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold" htmlFor="username">
                Password
              </label>
              <div className=" relative overflow-hidden">
                <MdLockOutline
                  size={18}
                  className="absolute top-4 left-3 text-[#929298]"
                ></MdLockOutline>
                <input
                  className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
                  type="password"
                  placeholder="Enter your name"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button className="bg-primary-navy text-sm hover:shadow-md ease-in-out py-4 rounded-md font-bold text-white mt-2">
              Submit
            </button>
            <div className="mt-4">
              <p className="text-xs font-semibold text-[#929298] text-center">
                already registered ?{" "}
                <Link href="/login" className="text-primary-navy underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
