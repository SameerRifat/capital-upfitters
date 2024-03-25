import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "../Shared/Testimonials/Testimonials";
import GetStarted from "../Shared/GetStarted/GetStarted";
import StatesSection from "./StatesSection/StatesSection";
import { getCompanyLogos, getTestimonials } from "@/apis/testimonial";

export const revalidate = 30 // revalidate at most every 30 seconds

const Automotive = async () => {
  let testimonialsData = []
  let testimonialError = null
  try {
    testimonialsData = await getTestimonials();
  } catch (error) {
    console.error('Error fetching data:', error);
    testimonialError = <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
  let logosData = []
  let logosError = null
  try {
    logosData = await getCompanyLogos();
  } catch (error) {
    console.error('Error fetching data:', error);
    logosError = <div className='error_message'>Error fetching logos. Please try again later.</div>;
  }

  return (
    <div className={css.automotive_container}>
      <AutomotiveHero />
      {logosError ? (logosError) : <CompanyLogosSection logosData={logosData}/>}
      {testimonialError ? (
        testimonialError
      ) : (
        testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />
      )}
      <StatesSection />
      <GetStarted />
    </div>
  );
};

export default Automotive;
