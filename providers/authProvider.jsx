"use client";
// import { checkAuth } from "@/actions/user";
import { useEffect } from "react";

const AuthProvider = ({ children }) => {
  useEffect(() => {
    // checkAuth();
  }, []);
  return children;
};

export default AuthProvider;
