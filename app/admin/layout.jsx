"use client";
import { AuthContext, CommonContext } from "@/providers/contextProvider";
import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { USER_ROLES } from "@/constants/userRoles";

const AdminLayout = ({ children }) => {
  const { isUserLoggedIn } = useContext(CommonContext);
  const { userDetails } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    console.log(isUserLoggedIn, userDetails);
    if (isUserLoggedIn === true && userDetails?.role === USER_ROLES.admin) {
      (pathname === "/admin" || pathname === "/admin/dashboard") &&
        router.replace(
          "/admin/dashboard/serviceProviders/pendingVerifications"
        );
    } else if (isUserLoggedIn === false) {
      router.replace("/admin/login");
    }
  }, [pathname, isUserLoggedIn, userDetails]);
  return children;
};

export default AdminLayout;
