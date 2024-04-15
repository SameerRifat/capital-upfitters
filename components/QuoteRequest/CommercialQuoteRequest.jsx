'use client'

import { useState } from 'react';
import cx from 'classnames'
import css from './quote.module.scss'
import ContactDetailsForm from './Forms/ContactDetailsForm';
import SelectYourServicesForm from './Forms/SelectYourServicesForm';
import { contactDetailInitialValues, servicesInitialValues, vehicleInformationInitialValues } from '@/lib/validations/formValidations';
import Success from './Forms/Success';
import PaginationScrollToTop from '@/components/Shared/PaginationScrollToTop';

const CommercialQuoteRequest = ({ services }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contactDetails: contactDetailInitialValues,
    servicesInformation: servicesInitialValues,
  });

  const handleNextStep = (step, data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCurrentStep(step);
  };



  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  // const handleSubmit = async () => {
  //   console.log("Submitting form data:", formData);
  // };

  const processedServices = services.map((item) => {
    return { value: item.serviceTitle, label: item.serviceTitle, tooltipDesc: item.description }
  })

  return (
    <PaginationScrollToTop currentPage={currentStep}>
      <div className={css.quote_container}>
        <h2 className={cx("typoH2", "text_gradient", css.heading)}>
          Quote Request
        </h2>
        {currentStep !== 3 && (
          <div className={css.steps_wrapper}>
            <div className={css.steps}>
              <div className={`typoH3 text_gradient ${css.step}`}>Step 1</div>
              <div className={`typoH3 text_gradient ${css.step}`}>Step 2</div>
            </div>
            <div className={cx(css.progress_bar_wrapper, css.commercial)}>
              <div className={`${css.progress_bar} ${currentStep === 1 ? css.active_step1 : currentStep === 2 ? css.active_step2 : css.active_step3}`} />
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <ContactDetailsForm
            initialValues={formData.contactDetails}
            onNextStep={(data) => handleNextStep(2, { contactDetails: data })}
          />
        )}
        {currentStep === 2 && (
          <SelectYourServicesForm
            initialValues={formData.servicesInformation}
            formData={formData}
            onPrevStep={() => handlePrevStep(2)}
            onFormSubmit={() => setCurrentStep(3)}
            services={processedServices}
            commercial
          />
        )}

        {currentStep === 3 && (
          <Success />
        )}
        <p className={cx("typoCaption", css.form_caption)}>
          Please fill out the required information below and we will reach out to help schedule your service. Make sure to provide all neceserry detailr to erceive the proper quote. If you need amidiate accistance please give us a call at: 301-304-1419 Quote will be send from our internal ShopMonkey system. Please check your spam folder if quote is not received.
        </p>
      </div>
    </PaginationScrollToTop>
  );
};

export default CommercialQuoteRequest;
