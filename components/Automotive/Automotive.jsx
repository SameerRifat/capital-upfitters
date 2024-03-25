import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "../Shared/Testimonials/Testimonials";
import GetStarted from "../Shared/GetStarted/GetStarted";
import StatesSection from "./StatesSection/StatesSection";
import { getTestimonials } from "@/apis/testimonial";

export const revalidate = 30 // revalidate at most every 30 seconds

const Automotive = async () => {
  let data = []
  let error = null
  try {
    data = await getTestimonials();
  } catch (error) {
    console.error('Error fetching data:', error);
    error = <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  return (
    <div className={css.automotive_container}>
      <AutomotiveHero />
      <CompanyLogosSection />
      {error ? (
        error
      ) : (
        data.length > 0 && <Testimonials testimonialsData={data} />
      )}
      <StatesSection />
      <GetStarted />
    </div>
  );
};

export default Automotive;
