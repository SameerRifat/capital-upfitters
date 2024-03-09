'use client'

import { useState } from 'react';
import cx from 'classnames'
import css from './quote.module.scss'
import ContactDetailsForm from './Forms/ContactDetailsForm';
import VehicleInformationForm from './Forms/VehicleInformationForm';
import SelectYourServicesForm from './Forms/SelectYourServicesForm';
import { contactDetailInitialValues, servicesInitialValues, vehicleInformationInitialValues } from '@/lib/validations/formValidations';

const QuoteRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    contactDetails: contactDetailInitialValues,
    vehicleInformation: vehicleInformationInitialValues,
    servicesInformation: servicesInitialValues,
  });

  const handleNextStep = (step, data) => {
    console.log('data: ', data)
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
    setCurrentStep(step);
  };
  // const handleFinaltStep = (data) => {
  //   console.log('data: ', data)
  //   setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  // };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = () => {
    // Submit formData to server
    console.log("Submitting form data:", formData);
  };

  return (
    <div className={css.quote_container}>
      <h2 className={cx("typoH2", "text_gradient", css.heading)}>
        Quote Request
      </h2>
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
        />
      )}
      {currentStep === 3 && (
        <SelectYourServicesForm
          initialValues={formData.servicesInformation}
          // updateFormData={(data) => handleFinaltStep({ servicesInformation: data })}
          onNextStep={(data) => handleNextStep(3, { servicesInformation: data })}
          onPrevStep={() => handlePrevStep(2)}
          onFormSubmit={() => handleSubmit()}
        />
      )}
    </div>
  );
};

export default QuoteRequest;
