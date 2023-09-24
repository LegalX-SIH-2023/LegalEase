"use client";

import React, { useContext, useEffect, useState } from "react";
import httpRequest from "@/utils/httpRequest";
import { HTTP_METHODS } from "@/constants/httpMethods";
import { useRouter } from "next/navigation";
import { CommonContext } from "@/providers/contextProvider";

const AdminLogin = () => {
  const { isUserLoggedIn, setAuthCheck } = useContext(CommonContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    httpRequest(`/api/admin/auth/login`, HTTP_METHODS.POST, {
      email,
      password,
    }).then((res) => {
      if (res.success) {
        setAuthCheck(true);
      } else {
        alert(res.message);
      }
    });
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      router.replace("/admin/dashboard");
    }
  }, [isUserLoggedIn]);

  return (
    <main className=" font-poppins">
      <div className="container mx-auto flex flex-col h-[90vh] justify-center items-center px-4">
        <h2 className="text-4xl font-bold text-center text-primary-navy mb-6">
          Admin
        </h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form
            className="p-6"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="passsword"
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary-navy hover:text-primary-lightGray text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
