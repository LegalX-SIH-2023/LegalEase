import "@/styles/globals.css";
import AppProviders from "@/providers/providers";
import AppNavbar from "@/components/common/Navbar";
import AppFooter from "@/components/common/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MHSSCOE ACM CHAPTER",
  description:
    "MHSSCOE ACM CHAPTER is a student chapter started by M. H. Saboo Siddik College Of Engineering in 2014. The chapter has successfully conducted various workshops, seminars and industrial visits for the students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>
          <dispatchEvent>
            <AppNavbar />
            <div className="m-5">{children}</div>
            <AppFooter />
          </dispatchEvent>
        </AppProviders>
      </body>
    </html>
  );
}
