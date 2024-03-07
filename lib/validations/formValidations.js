import * as yup from 'yup'

export const contactDetailsSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.string()
        .matches(/^[0-9]{11}$/, 'Must be 11 digits and only numbers')
        .required('Phone number is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
});
export const vehicleInformationSchema = yup.object().shape({
    year: yup.string().required('year is required'),
    make: yup.string().required('make is required'),
    model: yup.string().required('model is required'),
    licensePlate: yup.string().required('licensePlate is required'),
    state: yup.string().required('state is required'),
});