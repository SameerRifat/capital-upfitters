'use server'

import EmailTemplate from '@/components/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_Xkz4qQqK_4JsJSyHF6fyNtsAyJza1t7gR");

export const sendEmail = async (formData) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const EmailData = {
        firstName: capitalize(`${formData.contactDetails.firstName}`),
        lastName: capitalize(`${formData.contactDetails.lastName}`),
        phone: capitalize(`${formData.contactDetails.phoneNumber}`),
        email: `${formData.contactDetails.email}`,
        year: capitalize(`${formData.vehicleInformation.year}`),
        make: capitalize(`${formData.vehicleInformation.make}`),
        model: capitalize(`${formData.vehicleInformation.model}`),
        licensePlate: capitalize(`${formData.vehicleInformation.licensePlate}`),
        state: capitalize(`${formData.vehicleInformation.state}`),
        formatServices: `${formData.servicesInformation.services.map((service) => capitalize(service)).join(', ')}`,
        comment: capitalize(`${formData.servicesInformation.message}`),
    };

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


// "use server";

// // import { getErrorMessage, validateString } from "@/lib/Utils";
// import { Resend } from "resend";
// // import ContactFormEmail from "@/email/ContactFormEmail";
// import React from "react";
// import { renderAsync } from "@react-email/render";
// import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async (formData) => {
//     // const senderName = formData.get("senderName");
//     // const senderPhone = formData.get("senderPhone");
//     // const subject = formData.get("subject");
//     // const senderEmail = formData.get("senderEmail");
//     // const message = formData.get("message");

//     // if (!validateString(senderEmail, 500)) {
//     //     return {
//     //         error: "Invalid sender Email",
//     //     };
//     // }
//     // if (!validateString(message, 5000)) {
//     //     return {
//     //         error: "Invalid message",
//     //     };
//     // }
//     // if (!validateString(senderName, 50)) {
//     //     return {
//     //         error: "Invalid Name",
//     //     };
//     // }
//     // if (!validateString(subject, 5000)) {
//     //     return {
//     //         error: "Invalid Subject",
//     //     };
//     // }
//     // if (!validateString(senderPhone, 20)) {
//     //     return {
//     //         error: "Invalid Phone",
//     //     };
//     // }

//     let data;

//     const html = await renderAsync(
//         React.createElement(EmailTemplate, {
//             firstName: formData.firstName
//             // message: message,
//             // senderEmail: senderEmail,
//             // senderName: senderName,
//             // senderPhone: senderPhone,
//             // subject: subject
//         })
//     );

//     try {
//         data = await resend.emails.send({
//             // from: "TheWashers <info@thewashersuae.com>",
//             from: "Capital-Upfitters <onboarding@resend.dev>",
//             // to: "asifalibrw89@gmail.com",
//             to: "sameerrifatbrw789@gmail.com",
//             subject: "Message from contact form",
//             // reply_to: senderEmail,
//             html: html,
//         });
//     } catch (error) {
//         console.log('server error: ', error);
//         return {
//             error: error,
//         };
//     }

//     return {
//         data,
//     };
// };
