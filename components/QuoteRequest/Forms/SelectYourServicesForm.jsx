'use client'

import React, { useState } from 'react';
import css from './quoteForm.module.scss';
import cx from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { servicesSchema } from '@/lib/validations/formValidations';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
// import { services } from './data';
import Iconify from "@/components/iconify/iconify";
import { submitFormToTelegram } from '@/lib/utils/onSubmitTelegram';
import { toast } from 'react-hot-toast';
import { sendEmail } from '@/lib/actions/sendEmail';

const SelectYourServicesForm = ({ services, initialValues, onPrevStep, formData, onFormSubmit }) => {
  console.log('services: ', services)
  const [images, setImages] = useState([]);
  const imageChangeEvent = (e, setFieldValue) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            setFieldValue('images', newImages);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // const onSubmit = async (values, { setSubmitting, resetForm }) => {
  //   const dataToSubmit = { contactDetails: formData.contactDetails, vehicleInformation: formData.vehicleInformation, servicesInformation: values }
  //   const textResponse = await submitFormToTelegram(data)
  //   if(textResponse.error){
  //     setSubmitting(false);
  //     toast.error("Something went wrong")
  //   }
  //   if (textResponse.success) {
  //     setSubmitting(false);
  //     resetForm();
  //     toast.success("Data sent successfully")
  //     onFormSubmit()
  //   }
  //   try {
  //     const { data, error } = await sendEmail(dataToSubmit);
  //     if (error) {
  //       toast.error(error.message)
  //     }else{
  //       toast.success("Email sent successfully")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const dataToSubmit = {
      contactDetails: formData.contactDetails,
      vehicleInformation: formData.vehicleInformation,
      servicesInformation: values
    };

    try {
      const textResponse = await submitFormToTelegram(dataToSubmit);
      const { data, error } = await sendEmail(dataToSubmit);

      if (!textResponse.error && !error) {
        resetForm();
        toast.success("Request sent successfully");
        onFormSubmit();
      } else {
        throw new Error("Failed to send request");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
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
            <button type="submit" disabled={isSubmitting} className={css.submit_btn}>{isSubmitting ? <span className='loader' /> : 'Submit'}</button>
            {/* <button type="submit" onClick={onPrevStep} className={css.submit_btn}>Previous</button> */}
          </div>
          <div className={css.services_container}>
            <div className={css.services}>
              {services.length > 0 && services.map((item, ind) => (
                <div key={ind} className={css.service} data-tooltip-id={`tooltip-${ind}`}>
                  <input
                    type="checkbox"
                    id={item.value}
                    name='services'
                    // value={item.value}
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
                  <Tooltip id={`tooltip-${ind}`} place='bottom' delayShow={300} delayHide={300} arrowColor="rgba(92, 225, 230, 1)" className={css.tooltip} >
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
              <input type="file" name="images" accept='image/*' multiple className={css.file_input} onChange={(e) => imageChangeEvent(e, setFieldValue)} />
              <div className={css.images}>
                {values.images.map((image, ind) => (
                  <>
                    <div className={css.image} key={ind}>
                      <span className={css.delete_icon} onClick={() => setFieldValue('images', values.images.filter((image, imageInd) => imageInd !== ind))}>
                        <Iconify
                          icon="uiw:delete"
                          color="#ff0000"
                          width={15}
                        />
                      </span>
                      <img src={image} alt="image" />
                    </div>
                  </>
                ))}
              </div>
              <ErrorMessage
                name="images"
                component="div"
                className={cx("typoCaption", css.error)}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SelectYourServicesForm;

const TooltipContent = ({ title, desc }) => {
  return (
    <div className={cx(css.tooltip_content)}>
      <div className={css.ellipse} />
      <span className={cx("typoSubtitle2", "text_gradient", css.tooltip_title)}>
        {title}
      </span>
      <div className={cx(css.tooltip_desc)}>
        <p className={cx("typoCaption")}>
          {desc}
        </p>
      </div>
    </div>
  )
}