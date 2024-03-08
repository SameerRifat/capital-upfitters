'use client'

import React, { useState } from 'react';
import css from './quoteForm.module.scss';
import cx from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { servicesSchema } from '@/lib/validations/formValidations';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { services } from './data';

const SelectYourServicesForm = ({ onPrevStep }) => {
  const [images, setImages] = useState([]);

  const initialValues = {
    services: [],
    message: ''
  };

  const imageChangeEvent = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      }
      reader.readAsDataURL(file);
    })
  }

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("hello")
    console.log('values: ', values);
    console.log('images: ', images);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={servicesSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.form_header}>
            <h3 className={cx('typoH3', 'text_gradient')}>Select Your Services</h3>
            <button type="submit" disabled={isSubmitting} className={css.submit_btn}>Submit</button>
            {/* <button type="submit" onClick={onPrevStep} className={css.submit_btn}>Previous</button> */}
          </div>
          <div className={css.services_container}>
            <div className={css.services}>
              {services.map((item, ind) => (
                <div key={ind} className={css.service} data-tooltip-id={`tooltip-${ind}`}>
                  <input
                    type="checkbox"
                    id={item.value}
                    value={item.value}
                    className={css.checkbox_input}
                    checked={values.services.includes(item.value)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      const newValues = isChecked
                        ? [...values.services, item.value]
                        : values.services.filter((val) => val !== item.value);
                      setFieldValue('services', newValues);
                    }}
                  />
                  <label htmlFor={item.value} className={cx("typoBody2", css.custom_label, css.service_lable)}>{item.label}</label>
                  <Tooltip id={`tooltip-${ind}`} place='bottom' arrowColor="rgba(92, 225, 230, 1)" className={css.tooltip}>
                    <TooltipContent title={item.label} desc={item.tooltipDesc} />
                  </Tooltip>
                </div>
              ))}
            </div>
            <ErrorMessage name="services" component="div" className={cx("typoCaption", css.error)} />

            <div className={css.input_container}>
              <label className={cx("typoBody2", css.custom_label)}>Your message</label>
              <Field
                type=""
                as="textarea"
                name="message"
                placeholder='Leave a comment...'
                className={cx(css.cutom_input, css.cutom_textarea)}
                onChange={(event) => setFieldValue('message', event.currentTarget.value)}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={cx("typoCaption", css.error)}
              />
            </div>
            <div className={css.input_container}>
              <label className={cx("typoBody2", css.custom_label)}>Upload File</label>
              <input type="file" name="images" accept='image/*' multiple className={css.file_input} onChange={imageChangeEvent} />
              <div className={css.images}>
                {images.map((image, ind) => (
                  <>
                    <div className={css.image}>
                      <img src={image} alt="image" />
                    </div>
                  </>
                ))}
              </div>
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

export default SelectYourServicesForm;

const TooltipContent = ({ title, desc }) => {
  return (
    <div className={css.tooltip_content}>
      <div className={css.ellipse} />
      <span className={cx("typoSubtitle2", "text_gradient", css.tooltip_title)}>
        {title}
      </span>
      <div className={cx(css.tooltip_desc)}>
        {desc.map((item, ind) => (
          <>
            <p className={cx("typoCaption")}>
              {item}
            </p>
          </>
        ))}
      </div>
    </div>
  )
}