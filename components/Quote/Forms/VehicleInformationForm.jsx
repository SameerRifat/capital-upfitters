import React from 'react'
import css from './quoteForm.module.scss'
import cx from 'classnames'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select'
import { vehicleInformationSchema } from '@/lib/validations/formValidations';

const VehicleInformationForm = ({ onNextStep }) => {
  const initialValues = {
    year: '',
    make: '',
    model: '',
    licensePlate: '',
    state: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    onNextStep();
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
                    options={[
                      { value: '2024', label: '2024' },
                      { value: '2023', label: '2023' },
                      { value: '2022', label: '2022' }
                    ]}
                    placeholder='Year'
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
                type="text"
                name="make"
                placeholder='Make'
              />
              <ErrorMessage
                name="make"
                component="div"
                className={cx("typoCaption", css.error)}
              />
            </div>

            <div>
              <Field
                type="text"
                name="model"
                placeholder='Model'
              />
              <ErrorMessage name="model" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <Field
                type="text"
                name="licensePlate"
                placeholder='License Plate'
              />
              <ErrorMessage name="licensePlate" component="div" className={cx("typoCaption", css.error)} />
            </div>

            <div>
              <Field
                name="state"
              >
                {({ field }) => (
                  <Select
                    value={field.value ? { value: field.value, label: field.value } : null}
                    options={[
                      { value: 'stat1', label: 'stat1' },
                      { value: 'stat2', label: 'stat2' },
                      { value: 'stat3', label: 'stat3' }
                    ]}
                    placeholder="State"
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
