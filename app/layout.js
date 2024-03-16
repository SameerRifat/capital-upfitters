import { Inter } from "next/font/google";
import "./globals.css";
import '@/styles/typography.scss'
import Image from "next/image";
import Footer from "@/components/Shared/Footer/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Toaster } from 'react-hot-toast'

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
        <ScrollToTop>
          {children}
        </ScrollToTop>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: 'var(--background-color2)',
                color: 'var(--white)',
                border: '1px solid var(--primary-color)'
              },
            },
            error: {
              style: {
                background: 'var(--background-color2)',
                color: 'var(--white)',
              }
            }
          }}
        />
      </body>
    </html>
  );
}
