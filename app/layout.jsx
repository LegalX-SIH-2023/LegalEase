import "@/styles/globals.css";
import AppProviders from "@/providers/providers";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LegalConnect",
  description: "Earn, Consult, Automate & Learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          {/* <dispatchEvent> */}
          <Navbar />
          <div className="pt-[64px] min-h-[calc(100vh-340px)]">{children}</div>
          <Footer />
          {/* </dispatchEvent> */}
        </AppProviders>
      </body>
    </html>
  );
}
