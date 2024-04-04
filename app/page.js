import LandingPage from "@/components/LandingPage/LandingPage";
import styles from "./page.module.css";

export const revalidate = 30

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  );
}
