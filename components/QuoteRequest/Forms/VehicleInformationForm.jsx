import React from 'react'
import css from './quoteForm.module.scss'
import cx from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select'
import { vehicleInformationSchema } from '@/lib/validations/formValidations';
import { vehicleInformation } from './data';
import { State } from 'country-state-city'

const years = [];
for (let year = 2025; year >= 1980; year--) {
  years.push({ value: year.toString(), label: year.toString() });
}

const VehicleInformationForm = ({ initialValues, onNextStep, onPrevStep }) => {
  const onSubmit = (values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
    onNextStep(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={vehicleInformationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.form_header}>
            <h3 className={cx("typoH3", "text_gradient")}>
              Fill out contact details
            </h3>
            <button type="submit" disabled={isSubmitting}>Next</button>
          </div>
          <div className={cx(css.form_grid, css.vehicle_information_grid)}>
            <div>
              <Field
                name="year"
              >
                {({ field }) => (
                  <Select
                    value={field.value ? { value: field.value, label: field.value } : null}
                    options={years}
                    placeholder='Choose year'
                    isSearchable={false}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(option) => setFieldValue('year', option.value)}
                  />
                )}
              </Field>
              <ErrorMessage name="year" component="div" className={cx("typoCaption", css.error)} />
            </div>
            <div>
              <Field
                name="make"
              >
                {({ field }) => (
                  <Select
                    // value={field.value ? { value: field.value, label: field.value } : null}
                    value={vehicleInformation.makeData.find(option => option.value === field.value)}
                    options={vehicleInformation.makeData}
                    placeholder='Choose your make'
                    isSearchable={false}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(option) => setFieldValue('make', option.value)}
                  />
                )}
              </Field>
              <ErrorMessage
                name="make"
                component="div"
                className={cx("typoCaption", css.error)}
              />
            </div>

            <div>
              <Field
                name="model"
              >
                {({ field }) => (
                  <Select
                    value={field.value ? { value: field.value, label: field.value } : null}
                    options={vehicleInformation.modelData}
                    placeholder='Choose model'
                    isSearchable={false}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(option) => setFieldValue('model', option.value)}
                  />
                )}
              </Field>
              <ErrorMessage name="model" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <Field
                type="text"
                name="licensePlate"
                placeholder='License Plate'
                className={css.cutom_input}
              />
              <ErrorMessage name="licensePlate" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <Field
                name="state"
              >
                {({ field }) => (
                  <Select
                    value={State.getStatesOfCountry('US').find(item => item.value === field.value)}
                    options={
                      State && State.getStatesOfCountry('US').map((item) => (
                        { value: item.isoCode, label: item.name }
                      ))
                    }
                    placeholder='State'
                    isSearchable={false}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(option) => setFieldValue('state', option.value)}
                  />
                )}
              </Field>

              <ErrorMessage name="state" component="div" className={cx("typoCaption", css.error)} />
            </div>
          </div>
          <p className={cx("typoCaption", css.form_caption)}>
            Please fill out the required information below and we will reach out to help schedule your service. Make sure to provide all necessary details to receive the proper quote. If you need immediate assistance please give us a call at: 301-304-1419. Quote will be sent from our internal ShopMonkey system. Please check your spam folder if quote is not received.
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default VehicleInformationForm
