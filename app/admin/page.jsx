"use client"

import React, { useContext, useEffect, useState } from "react";
// import { BiUser } from "react-icons/bi";
// import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import Image from 'next/image';
// import { Link, useNavigate } from "next/link";
import  Link  from "next/link";
// import httprequest from "../utils/req";

const adminLogin = () => {
//   const navigate = useNavigate();
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const login = async () => {
//     httprequest(`/api/${user ? "serviceprovider" : "client"}/login`, "POST", {
//       email,
//       password,
//     }).then((res) => {
//       if (res.success) {
//         navigate(`/${user ? "serviceprovider" : "client"}`);
//       } else {
//         alert(res.message);
//       }
//     });
//   };

//   useEffect(() => {
//     httprequest(`/api/${user ? "serviceprovider" : "client"}/getDetails`, "GET").then(
//       (res) => {
//         if (res.success) {
//           navigate(`/${user ? "serviceprovider" : "client"}`);
//         } else {
//         }
//       }
//     );
//   }, []);
  return (
    <main className=" font-poppins">
      <div className="container mx-auto flex flex-col h-[90vh] justify-center items-center px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Admin</h2>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form className="p-6" >
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="text"
                id="name"
                name='name'
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name='passsword'
                className="w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300"
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

export default adminLogin;