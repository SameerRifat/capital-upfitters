import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "../Shared/Testimonials/Testimonials";
import GetStarted from "../Shared/GetStarted/GetStarted";
import StatsSection from "./StatsSection/StatsSection";
import { getCompanyLogos, getTestimonials } from "@/apis/testimonial";
import { getStats } from "@/apis/settings";

export const revalidate = 30 // revalidate at most every 30 seconds

const Automotive = async ({ heroData }) => {
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
  let statsData = {}
  let statsError = null
  try {
    statsData = await getStats();
  } catch (error) {
    console.error('Error fetching data:', error);
    statsError = <div className='error_message'>Error fetching stats. Please try again later.</div>;
  }


  return (
    <div className={css.automotive_container}>
      <AutomotiveHero heroData={heroData}/>
      {logosError ? (logosError) : <CompanyLogosSection logosData={logosData} />}
      {testimonialError ? (
        testimonialError
      ) : (
        testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />
      )}
      <StatsSection statsData={statsData} />
      <GetStarted />
    </div>
  );
};

export default Automotive;
