"use client";
import { AuthContext, CommonContext } from "@/providers/contextProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { USER_ROLES } from "@/constants/userRoles";

const UserDashboard = () => {
  const { isUserLoggedIn } = useContext(CommonContext);
  const { userDetais } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (isUserLoggedIn === true && userDetais?.role !== USER_ROLES.admin) {
      router.push("/dashboard/profile");
    } else if (isUserLoggedIn === false) {
      router.replace("/login");
    }
  }, [isUserLoggedIn, userDetais]);
  return <></>;
};

export default UserDashboard;
