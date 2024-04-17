import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "@/components/Shared/Testimonials/Testimonials";
import GetStarted from "@/components/Shared/GetStarted/GetStarted";
import StatsSection from "./StatsSection/StatsSection";
import { getCommercialTestimonials, getTestimonials } from "@/apis/testimonial";
import { getAutomotiveHeroData, getCommercialHeroData, getCommercialStats, getStats } from "@/apis/settings";
import { getAllServices } from "@/apis/services";
import { getAllCommercialServices } from "@/apis/commercialServices";
import { getCommercialLogos, getCompanyLogos } from "@/apis/logos";

export const revalidate = 30; // revalidate at most every 30 seconds

const Automotive = async ({ commercial = false }) => {
  if (commercial) {
    try {
      const [automotiveHero, servicesData, testimonialsData, logosData, statsData] = await Promise.all([
        getCommercialHeroData(),
        getAllCommercialServices(),
        getCommercialTestimonials(),
        getCommercialLogos(),
        getCommercialStats()
      ]);

      return (
        <div className={css.automotive_container}>
          <AutomotiveHero heroData={automotiveHero} servicesData={servicesData} commercial={commercial && true} />
          <CompanyLogosSection logosData={logosData} />
          {testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />}
          <StatsSection statsData={statsData} />
          <GetStarted commercial={commercial}/>
        </div>
      );
    } catch (error) {
      console.error('Error fetching data:', error);
      return <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
  } else {
    try {
      const [automotiveHero, servicesData, testimonialsData, logosData, statsData] = await Promise.all([
        getAutomotiveHeroData(),
        getAllServices(),
        getTestimonials(),
        getCompanyLogos(),
        getStats()
      ]);
      return (
        <div className={css.automotive_container}>
          <AutomotiveHero heroData={automotiveHero} servicesData={servicesData} commercial={commercial && true} />
          <CompanyLogosSection logosData={logosData} />
          {testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />}
          <StatsSection statsData={statsData} />
          <GetStarted/>
        </div>
      );
    } catch (error) {
      console.error('Error fetching data:', error);
      return <div className='error_message'>Error fetching data. Please try again later.</div>;
    }
  }
};

export default Automotive;