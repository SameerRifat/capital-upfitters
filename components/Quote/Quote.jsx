'use client'

import { useState } from 'react';
import cx from 'classnames'
import css from './quote.module.scss'
import ContactDetailsForm from './Forms/ContactDetailsForm';
import VehicleInformationForm from './Forms/VehicleInformationForm';
import SelectYourServicesForm from './Forms/SelectYourServicesForm';

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
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
        <ContactDetailsForm onNextStep={handleNextStep} />
      )}
      {currentStep === 2 && (
        <VehicleInformationForm onNextStep={handleNextStep} />
      )}
      {currentStep === 3 && (
        <SelectYourServicesForm />
      )}
    </div>
  );
};

export default Quote;
