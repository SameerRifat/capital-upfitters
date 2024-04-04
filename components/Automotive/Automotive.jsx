import React from "react";
import css from "./automotive.module.scss";
import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
import Testimonials from "../Shared/Testimonials/Testimonials";
import GetStarted from "../Shared/GetStarted/GetStarted";
import StatsSection from "./StatsSection/StatsSection";
import { getCompanyLogos, getTestimonials } from "@/apis/testimonial";
import { getAutomotiveHeroData, getStats } from "@/apis/settings";
import { getAllServices } from "@/apis/services";

export const revalidate = 30; // revalidate at most every 30 seconds

const Automotive = async ({ heroData, commercial = false }) => {
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
        <AutomotiveHero heroData={automotiveHero} servicesData={commercial ? heroData : servicesData} commercial={commercial && true} />
        <CompanyLogosSection logosData={logosData} />
        {testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />}
        <StatsSection statsData={statsData} />
        <GetStarted />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div className='error_message'>Error fetching data. Please try again later.</div>;
  }
};

export default Automotive;

// import React from "react";
// import css from "./automotive.module.scss";
// import AutomotiveHero from "./AutomotiveHero/AutomotiveHero";
// import CompanyLogosSection from "./CompanyLogosSection/CompanyLogosSection";
// import Testimonials from "../Shared/Testimonials/Testimonials";
// import GetStarted from "../Shared/GetStarted/GetStarted";
// import StatsSection from "./StatsSection/StatsSection";
// import { getCompanyLogos, getTestimonials } from "@/apis/testimonial";
// import { getAutomotiveHeroData, getStats } from "@/apis/settings";
// import { getAllServices } from "@/apis/services";

// export const revalidate = 30 // revalidate at most every 30 seconds

// const Automotive = async ({heroData, commercial=false}) => {

//   let automotiveHero
//   let automotiveHeroError = null

//   try {
//     automotiveHero = await getAutomotiveHeroData();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     automotiveHeroError = <div className='error_message'>Error fetching data. Please try again later.</div>;
//   }
//   let servicesData
//   let servicesError = null

//   try {
//     servicesData = await getAllServices();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     servicesError = <div className='error_message'>Error fetching data. Please try again later.</div>;
//   }

//   let testimonialsData = []
//   let testimonialError = null
//   try {
//     testimonialsData = await getTestimonials();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     testimonialError = <div className='error_message'>Error fetching data. Please try again later.</div>;
//   }
//   let logosData = []
//   let logosError = null
//   try {
//     logosData = await getCompanyLogos();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     logosError = <div className='error_message'>Error fetching logos. Please try again later.</div>;
//   }
//   let statsData = {}
//   let statsError = null
//   try {
//     statsData = await getStats();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     statsError = <div className='error_message'>Error fetching stats. Please try again later.</div>;
//   }


//   return (
//     <div className={css.automotive_container}>
//       {servicesError ? (servicesError) : <AutomotiveHero heroData={automotiveHero} servicesData={commercial ? heroData : servicesData} commercial={commercial && true}/>}
//       {logosError ? (logosError) : <CompanyLogosSection logosData={logosData} />}
//       {testimonialError ? (
//         testimonialError
//       ) : (
//         testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />
//       )}
//       <StatsSection statsData={statsData} />
//       <GetStarted />
//     </div>
//   );
// };

// export default Automotive;
