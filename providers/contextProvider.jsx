"use client";
import React, { createContext, useState } from "react";

export const CommonContext = createContext();
export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  //Common States
  const [isLoading, setIsLoading] = useState(false);
  const [authCheck, setAuthCheck] = useState(true);
  const [isUserLoggedIn, setUserLoggedIn] = useState();

  //Auth States
  const [userDetails, setUserDetails] = useState(null);
  return (
    <CommonContext.Provider
      value={{
        isLoading,
        setIsLoading,
        authCheck,
        setAuthCheck,
        isUserLoggedIn,
        setUserLoggedIn,
      }}
    >
      <AuthContext.Provider value={{ userDetails, setUserDetails }}>
        {children}
      </AuthContext.Provider>
    </CommonContext.Provider>
  );
};

export default ContextProvider;
