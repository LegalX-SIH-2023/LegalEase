"use client";
// import { checkAuth } from "@/actions/user";
import { useContext, useEffect } from "react";
import { AuthContext, CommonContext } from "./contextProvider";
import httpRequest from "@/utils/httpRequest";
import { HTTP_METHODS } from "@/constants/httpMethods";

const AuthProvider = ({ children }) => {
  const { setUserLoggedIn } = useContext(CommonContext);
  const { setUserDetails } = useContext(AuthContext);

  useEffect(() => {
    httpRequest(`/api/authCheck`, HTTP_METHODS.GET).then((res) => {
      if (res.success) {
        setUserDetails(res.data.user);
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
  }, []);
  return children;
};

export default AuthProvider;
