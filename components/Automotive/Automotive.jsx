import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "../Shared/Testimonials/Testimonials";
import GetStarted from "../Shared/GetStarted/GetStarted";
import StatesSection from "./StatesSection/StatesSection";

const Automotive = () => {
  return (
    <div className={css.automotive_container}>
      <AutomotiveHero />
      <CompanyLogosSection />
      <Testimonials />
      <StatesSection />
      <GetStarted />
    </div>
  );
};

export default Automotive;
