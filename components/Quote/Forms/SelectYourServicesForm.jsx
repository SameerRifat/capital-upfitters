import React from 'react'
import css from './quoteForm.module.scss'
import cx from 'classnames'

const SelectYourServicesForm = ({ onNextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    onNextStep();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.form_header}>
        <h3 className={cx("typoH3", "text_gradient")}>
          Select Your Services
        </h3>
        <button type="submit">Next</button>
      </div>
      <div className={css.form_grid}>
        ContactDetailsForm
      </div>
    </form>
  );
};

export default SelectYourServicesForm