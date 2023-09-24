import QueryProvider from "@/providers/queryClientProvider";
import AuthProvider from "@/providers/authProvider";
import ContextProvider, { CommonContext } from "./contextProvider";

const AppProviders = ({ children }) => {
  return (
    <ContextProvider>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ContextProvider>
  );
};

export default AppProviders;
