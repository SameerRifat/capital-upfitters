import LandingPage from "@/components/LandingPage/LandingPage";
import styles from "./page.module.css";

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
    "Auto customization"
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
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  );
}
