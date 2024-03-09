import React, { useState } from 'react'
import css from './quoteForm.module.scss'
import cx from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactDetailsSchema } from '@/lib/validations/formValidations';
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from 'react-international-phone';
import 'react-international-phone/style.css';

const customStyles = {
  '--react-international-phone-border-radius': '8px',
  // '--react-international-phone-border-color': 'gray',
  '--react-international-phone-background-color': 'tranparent',
  '--react-international-phone-text-color': 'white',
  '--react-international-phone-selected-dropdown-item-background-color': 'black',
  '--react-international-phone-country-selector-background-color-hover': 'black',
};

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ['zz', 'ca', 'mx', 'us'].includes(iso2);
});

const ContactDetailsForm = ({ initialValues, onNextStep }) => {

  const onSubmit = (values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    onNextStep(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactDetailsSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.form_header}>
            <h3 className={cx("typoH3", "text_gradient")}>
              Fill out contact details
            </h3>
            <button type="submit" disabled={isSubmitting}>Next</button>
          </div>
          <div className={cx(css.form_grid, css.contact_details_grid)}>
            <div>
              <Field
                type="text"
                name="firstName"
                placeholder='First name'
                className={css.cutom_input}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={cx("typoCaption", css.error)}
              />
            </div>

            <div>
              <Field
                type="text"
                name="lastName"
                placeholder='Last name'
                className={css.cutom_input}
              />
              <ErrorMessage name="lastName" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <PhoneInput
                defaultCountry="us"
                name='phoneNumber'
                value={values.phoneNumber}
                onChange={(phone) => setFieldValue('phoneNumber', phone)}
                countries={countries}
                className={css.cutom_phone_input}
                style={customStyles}
              />
              <ErrorMessage name="phoneNumber" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder='Email address'
                className={css.cutom_input}
              />
              <ErrorMessage name="email" component="div" className={cx("typoCaption", css.error)} />
            </div>
          </div>
          <p className={cx("typoCaption", css.form_caption)}>
            Please fill out the required information below and we will reach out to help schedule your service. Make sure to provide all neceserry detailr to erceive the proper quote. If you need amidiate accistance please give us a call at: 301-304-1419 Quote will be send from our internal ShopMonkey system. Pleas echekc your spam folder if quote is not received.
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default ContactDetailsForm