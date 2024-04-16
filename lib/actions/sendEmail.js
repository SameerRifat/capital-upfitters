'use server'

import { getEmailHeadingData } from '@/apis/settings';
import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_Xkz4qQqK_4JsJSyHF6fyNtsAyJza1t7gR");

export const sendEmail = async (formData, commercial = false, ip = null) => {
    let emailHeadingData
    try {
        emailHeadingData = await getEmailHeadingData();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const EmailData = {
        firstName: capitalize(`${formData.contactDetails.firstName}`),
        lastName: capitalize(`${formData.contactDetails.lastName}`),
        phone: capitalize(`${formData.contactDetails.phoneNumber}`),
        email: `${formData.contactDetails.email}`,
        formatServices: `${formData.servicesInformation.services.map((service) => capitalize(service)).join(', ')}`,
        comment: capitalize(`${formData.servicesInformation.message}`),
    };

    if (!commercial) {
        EmailData.year = capitalize(`${formData.vehicleInformation.year}`);
        EmailData.make = capitalize(`${formData.vehicleInformation.make}`);
        EmailData.model = capitalize(`${formData.vehicleInformation.model}`);
        EmailData.licensePlate = capitalize(`${formData.vehicleInformation.licensePlate}`);
        EmailData.state = capitalize(`${formData.vehicleInformation.state}`);
    }
    EmailData.commercial = commercial

    let attachments = [];
    if (formData.servicesInformation.images && formData.servicesInformation.images.length > 0) {
        attachments = formData.servicesInformation.images.map((image, index) => {
            const base64Image = image.split(',')[1];
            const extension = image.split(';')[0].split('/')[1];
            return {
                content: base64Image,
                filename: `image${index + 1}.${extension}`,
            };
        });
    }
    if (ip) {
        EmailData.ip = ip
    }
    EmailData.emailHeading = emailHeadingData.heading

    const { data, error } = await resend.emails.send({
        from: 'Capital-Upfitters <onboarding@resend.dev>',
        to: ['asifalibrw89@gmail.com'],
        subject: 'Quote request',
        react: EmailTemplate(EmailData),
        attachments: attachments,
    });

    if (error) {
        console.log("Error: in sendEmail function")
        return { error: error };
    }

    return { data };
};

// 'use server'

// import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend("re_Xkz4qQqK_4JsJSyHF6fyNtsAyJza1t7gR");

// export const sendEmail = async (formData) => {
//     const capitalize = (str) => {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     };

//     const EmailData = {
//         firstName: capitalize(`${formData.contactDetails.firstName}`),
//         lastName: capitalize(`${formData.contactDetails.lastName}`),
//         phone: capitalize(`${formData.contactDetails.phoneNumber}`),
//         email: `${formData.contactDetails.email}`,
//         year: capitalize(`${formData.vehicleInformation.year}`),
//         make: capitalize(`${formData.vehicleInformation.make}`),
//         model: capitalize(`${formData.vehicleInformation.model}`),
//         licensePlate: capitalize(`${formData.vehicleInformation.licensePlate}`),
//         state: capitalize(`${formData.vehicleInformation.state}`),
//         formatServices: `${formData.servicesInformation.services.map((service) => capitalize(service)).join(', ')}`,
//         comment: capitalize(`${formData.servicesInformation.message}`),
//     };

//     let attachments = [];
//     if (formData.servicesInformation.images && formData.servicesInformation.images.length > 0) {
//         attachments = formData.servicesInformation.images.map((image, index) => {
//             const base64Image = image.split(',')[1];
//             const extension = image.split(';')[0].split('/')[1];
//             return {
//                 content: base64Image,
//                 filename: `image${index + 1}.${extension}`,
//             };
//         });
//     }

//     const { data, error } = await resend.emails.send({
//         from: 'Capital-Upfitters <onboarding@resend.dev>',
//         to: ['asifalibrw89@gmail.com'],
//         subject: 'Quote request',
//         react: EmailTemplate(EmailData),
//         attachments: attachments,
//     });

//     if (error) {
//         console.log("Error: in sendEmail function")
//         return { error: error };
//     }

//     return { data };
// };

