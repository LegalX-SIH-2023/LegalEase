import QueryProvider from "@/providers/queryClientProvider";
import AuthProvider from "@/providers/authProvider";

const AppProviders = ({ children }) => {
  return (
    <QueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
};

export default AppProviders;
