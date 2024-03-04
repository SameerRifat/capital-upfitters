import { Inter } from "next/font/google";
import "./globals.css";
import '@/styles/typography.scss'
import Image from "next/image";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capital Upfitters",
  description: "Welcome to Capital Upfitters, your one-stop destination for top-notch car services. From maintenance to customization, we've got you covered. Visit us today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="top_ellipse_bg" />
        {/* <div className="ellipse-bg">
          <Image
            src='/ellipse.png'
            alt="ellipse"
            fill
          />
        </div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
