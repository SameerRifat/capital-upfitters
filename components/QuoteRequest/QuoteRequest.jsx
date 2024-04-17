'use client'

import { useState } from 'react';
import cx from 'classnames'
import css from './quote.module.scss'
import ContactDetailsForm from './Forms/ContactDetailsForm';
import VehicleInformationForm from './Forms/VehicleInformationForm';
import SelectYourServicesForm from './Forms/SelectYourServicesForm';
import { contactDetailInitialValues, servicesInitialValues, vehicleInformationInitialValues } from '@/lib/validations/formValidations';
import Success from './Forms/Success';
import PaginationScrollToTop from '@/components/Shared/PaginationScrollToTop';

const QuoteRequest = ({ services, customizedMakeData, customizedModelsData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contactDetails: contactDetailInitialValues,
    vehicleInformation: vehicleInformationInitialValues,
    servicesInformation: servicesInitialValues,
  });

  const handleNextStep = (step, data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCurrentStep(step);
  };



  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const processedServices = services.map((item) => {
    return { value: item.serviceTitle, label: item.serviceTitle, tooltipDesc: item.tooltipDescription }
  })

  return (
    <PaginationScrollToTop currentPage={currentStep}>
      <div className={css.quote_container}>
        <h2 className={cx("typoH2", "text_gradient", css.heading)}>
          Quote Request
        </h2>
        {currentStep !== 4 && (
          <div className={css.steps_wrapper}>
            <div className={css.steps}>
              <div className={`typoH3 text_gradient ${css.step}`}>Step 1</div>
              <div className={`typoH3 text_gradient ${css.step}`}>Step 2</div>
              <div className={`typoH3 text_gradient ${css.step}`}>Step 3</div>
            </div>
            <div className={css.progress_bar_wrapper}>
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
          <VehicleInformationForm
            initialValues={formData.vehicleInformation}
            onNextStep={(data) => handleNextStep(3, { vehicleInformation: data })}
            onPrevStep={() => handlePrevStep(1)}
            customizedMakeData={customizedMakeData} 
            customizedModelsData={customizedModelsData}
          />
        )}
        {currentStep === 3 && (
          <SelectYourServicesForm
            initialValues={formData.servicesInformation}
            formData={formData}
            onPrevStep={() => handlePrevStep(2)}
            onFormSubmit={() => setCurrentStep(4)}
            services={processedServices}
          />
        )}

        {currentStep === 4 && (
          <Success />
        )}
        <p className={cx("typoCaption", css.form_caption)}>
          Please fill out the required information below and we will reach out to help schedule your service. Make sure to provide all neceserry detailr to erceive the proper quote. If you need amidiate accistance please give us a call at: 301-304-1419 Quote will be send from our internal ShopMonkey system. Please check your spam folder if quote is not received.
        </p>
      </div>
    </PaginationScrollToTop>
  );
};

export default QuoteRequest;
