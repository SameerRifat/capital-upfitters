import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="ellipse-bg">
          <Image
            src='/ellipse.png'
            alt="ellipse"
            fill
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
