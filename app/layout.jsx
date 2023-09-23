import "@/styles/globals.css";
import AppProviders from "@/providers/providers";
// import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIH 2023",
  description:
    "MHSSCOE ACM CHAPTER is a student chapter started by M. H. Saboo Siddik College Of Engineering in 2014. The chapter has successfully conducted various workshops, seminars and industrial visits for the students.",
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
