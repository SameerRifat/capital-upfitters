import { Inter } from "next/font/google";
import "./globals.css";
import '@/styles/typography.scss'
import Footer from "@/components/Shared/Footer/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capital Upfitters: Capital Auto Upfitters & Protective Coatings",
  description: "Where your journey to overcoming automotive and commercial challenges begins. Transform your vehicles and structures with our proven solutions, and experience peace of mind knowing you're prepared for anything. Let Capital Upfitters be the hero in your story of success and longevity.",
  keywords: [
    "Fleet optimization",
    "Vehicle customization",
    "Paint protection film (Clear bra)",
    "Wheels and tires",
    "Hitch solutions",
    "Window tinting",
    "UV protection",
    "Anti-corrosion clear coat",
    "Rust protection",
    "Ceramic coatings",
    "Undercoating",
    "Patriot Liner",
    "Automotive",
    "Auto & truck accessories",
    "Auto customization"
  ],
  openGraph: {
    title: "Capital Upfitters: Capital Auto Upfitters & Protective Coatings",
    description: "Where your journey to overcoming automotive and commercial challenges begins. Transform your vehicles and structures with our proven solutions, and experience peace of mind knowing you're prepared for anything. Let Capital Upfitters be the hero in your story of success and longevity.",
    images: [
      {
        url: "/cu-logo.svg",
        width: 800,
        height: 600,
        alt: "Capital Upfitters",
      },
    ],
    type: "website",
    // url: "https://capital-upfitters.com",
  },
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
