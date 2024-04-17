import { Inter } from "next/font/google";
import "./globals.css";
import '@/styles/typography.scss'
import Footer from "@/components/Shared/Footer/Footer";
import ScrollToTop from "@/components/Shared/ScrollToTop";
import ActiveIdustryProvider from "@/context/ActiveIndustriesProvider";
// import BgEllipses from "@/components/Shared/bgEllipses";
import ToasterComp from "@/components/Shared/ToasterComp";
import BgEllipses from "@/components/Shared/BgEllipses";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://capital-upfitters-gray.vercel.app/'),
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
    "Auto customization",
    "Commercial Services"
  ],
  openGraph: {
    title: "Capital Upfitters: Capital Auto Upfitters & Protective Coatings",
    description: "Where your journey to overcoming automotive and commercial challenges begins. Transform your vehicles and structures with our proven solutions, and experience peace of mind knowing you're prepared for anything. Let Capital Upfitters be the hero in your story of success and longevity.",
    images: [
      {
        url: "/automotive2.png",
        width: 800,
        height: 600,
        alt: "Capital Upfitters"
      },
    ],
    type: "website",
    // url: "https://capital-upfitters-gray.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BgEllipses />
        <ScrollToTop>
          <ActiveIdustryProvider>
            {children}
            <Footer />
          </ActiveIdustryProvider>
        </ScrollToTop>
        <ToasterComp />
      </body>
    </html>
  );
}
