import * as yup from 'yup'
import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();


export const contactDetailInitialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
};
export const contactDetailsSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string()
        // .matches(/^[0-9]{11}$/, 'Must be 11 digits and only numbers')
        .test('phone', 'Invalid phone number', function (value) {
            try {
                const phoneNumber = phoneUtil.parseAndKeepRawInput(value);
                return phoneUtil.isValidNumber(phoneNumber);
            } catch (e) {
                return false;
            }
        })
        .required('Phone number is required'),
    email: yup.string().email('Invalid email address').required('Email is required')
});
export const vehicleInformationInitialValues = {
    year: '',
    make: '',
    model: '',
    licensePlate: '',
    state: ''
};
export const vehicleInformationSchema = yup.object().shape({
    year: yup.string().required('year is required'),
    make: yup.string().required('make is required'),
    model: yup.string().required('model is required'),
    licensePlate: yup.string().required('licensePlate is required'),
    state: yup.string().required('state is required'),
});
export const servicesInitialValues = {
    services: [],
    message: '',
    images: [],
};
export const servicesSchema = yup.object().shape({
    services: yup.array().min(1, 'At least one service must be selected').required('service is required'),
    message: yup.string().required('message is required'),
    services: yup.array(),
});