import "@/styles/globals.css";
import AppProviders from "@/providers/providers";
// import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LegalConnect",
  description:
    "Earn, Consult, Automate & Learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <dispatchEvent>
            {/* <Navbar/> -----------> as of now navbar is in the Hero component*/}
            <div>{children}</div>
            <Footer />
          </dispatchEvent>
        </AppProviders>
      </body>
    </html>
  );
}
