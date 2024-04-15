export const submitFormToTelegram = async (data, commercial=false) => {
    // const TELEGRAM_BOT_TOKEN = "6652666730:AAGEJi2jbmttBxkrc-f5jItmu4XJhqCQhm4";
    // const TELEGRAM_CHAT_ID = "-1002128482422";
    const TELEGRAM_BOT_TOKEN = "7113668591:AAE1rt_n1TdqtPoToPBoLyMu-2WDkUG__t8";
    const TELEGRAM_CHAT_ID = "6748031601";

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    try {
        const contactDetails = {
            firstName: capitalize(data.contactDetails.firstName),
            lastName: capitalize(data.contactDetails.lastName),
            phoneNumber: capitalize(data.contactDetails.phoneNumber),
            email: data.contactDetails.email,
        };

        let vehicleInformation = {};
        if (!commercial) {
            vehicleInformation = {
                year: capitalize(data.vehicleInformation.year),
                make: capitalize(data.vehicleInformation.make),
                model: capitalize(data.vehicleInformation.model),
                licensePlate: capitalize(data.vehicleInformation.licensePlate),
                state: capitalize(data.vehicleInformation.state),
            };
        }

        const services = data.servicesInformation.services.map(service => capitalize(service));

        const message = `
        Contact Information:
            - Name: ${contactDetails.firstName}
            - Last Name: ${contactDetails.lastName}
            - Phone: ${contactDetails.phoneNumber}
            - Email: ${contactDetails.email}
        ${!commercial ? `
        Car Information:
            - Year: ${vehicleInformation.year}
            - Make: ${vehicleInformation.make}
            - Model: ${vehicleInformation.model}
            - License Plate: ${vehicleInformation.licensePlate}
            - State: ${vehicleInformation.state}` : ''}
        Services: ${services.map((service) => capitalize(service)).join(', ')}
        Comments: (${capitalize(data.servicesInformation.message)})
    `;

        if (data.servicesInformation.images && data.servicesInformation.images.length > 0) {
            const photoArray = Array.from(data.servicesInformation.images);

            const mediaGroup = photoArray.map((_, index) => ({
                type: 'photo',
                media: `attach://photo_${index}`,
                caption: index === 0 ? message : undefined,
            }));

            const formData = new FormData();
            formData.append('chat_id', TELEGRAM_CHAT_ID);
            formData.append('media', JSON.stringify(mediaGroup));

            photoArray.forEach((photo, index) => {
                // Convert data URI to Blob
                const byteString = atob(photo.split(',')[1]);
                const mimeString = photo.split(',')[0].split(':')[1].split(';')[0];
                const ab = new ArrayBuffer(byteString.length);
                const ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                const blob = new Blob([ab], { type: mimeString });

                formData.append(`photo_${index}`, blob, `photo_${index}`);
            });

            const photoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
                method: 'POST',
                body: formData,
            });

            if (!photoResponse.ok) {
                console.error('Error sending photos to Telegram:', photoResponse.statusText);
            } else {
                return { success: true };
            }
        } else {
            const textResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                body: new URLSearchParams({
                    'chat_id': TELEGRAM_CHAT_ID,
                    'text': message,
                    // 'parse_mode': 'html',
                    'parse_mode': 'Markdown',
                }),
            });

            if (!textResponse.ok) {
                console.error('Error sending text to Telegram:', textResponse.statusText);
            } else {
                return { success: true };
            }
        }

        return { success: false, error: 'Unknown error' };
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return { success: false, error: 'Unknown error' };
    }
};
// export const submitFormToTelegram = async (data) => {
//     const TELEGRAM_BOT_TOKEN = "6652666730:AAGEJi2jbmttBxkrc-f5jItmu4XJhqCQhm4";
//     const TELEGRAM_CHAT_ID = "-1002128482422";

//     const capitalize = (str) => {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     };

//     try {
//         const contactDetails = {
//             firstName: capitalize(data.contactDetails.firstName),
//             lastName: capitalize(data.contactDetails.lastName),
//             phoneNumber: capitalize(data.contactDetails.phoneNumber),
//             email: data.contactDetails.email,
//         };

//         const vehicleInformation = {
//             year: capitalize(data.vehicleInformation.year),
//             make: capitalize(data.vehicleInformation.make),
//             model: capitalize(data.vehicleInformation.model),
//             licensePlate: capitalize(data.vehicleInformation.licensePlate),
//             state: capitalize(data.vehicleInformation.state),
//         };

//         const services = data.servicesInformation.services.map(service => capitalize(service));

//         const message = `
//         Contact Information:
//             - Name: ${contactDetails.firstName}
//             - Last Name: ${contactDetails.lastName}
//             - Phone: ${contactDetails.phoneNumber}
//             - Email: ${contactDetails.email}

//         Car Information:
//             - Year: ${vehicleInformation.year}
//             - Make: ${vehicleInformation.make}
//             - Model: ${vehicleInformation.model}
//             - License Plate: ${vehicleInformation.licensePlate}
//             - State: ${vehicleInformation.state}

//         Services: ${services.map((service) => capitalize(service)).join(', ')}

//         Comments: (${capitalize(data.servicesInformation.message)})
//         `;

//         if (data.servicesInformation.images && data.servicesInformation.images.length > 0) {
//             const photoArray = Array.from(data.servicesInformation.images);

//             const mediaGroup = photoArray.map((_, index) => ({
//                 type: 'photo',
//                 media: `attach://photo_${index}`,
//                 caption: index === 0 ? message : undefined,
//             }));

//             const formData = new FormData();
//             formData.append('chat_id', TELEGRAM_CHAT_ID);
//             formData.append('media', JSON.stringify(mediaGroup));

//             photoArray.forEach((photo, index) => {
//                 // Convert data URI to Blob
//                 const byteString = atob(photo.split(',')[1]);
//                 const mimeString = photo.split(',')[0].split(':')[1].split(';')[0];
//                 const ab = new ArrayBuffer(byteString.length);
//                 const ia = new Uint8Array(ab);
//                 for (let i = 0; i < byteString.length; i++) {
//                     ia[i] = byteString.charCodeAt(i);
//                 }
//                 const blob = new Blob([ab], { type: mimeString });

//                 formData.append(`photo_${index}`, blob, `photo_${index}`);
//             });

//             const photoResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMediaGroup`, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!photoResponse.ok) {
//                 console.error('Error sending photos to Telegram:', photoResponse.statusText);
//             } else {
//                 return { success: true };
//             }
//         } else {
//             const textResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
//                 method: 'POST',
//                 body: new URLSearchParams({
//                     'chat_id': TELEGRAM_CHAT_ID,
//                     'text': message,
//                     // 'parse_mode': 'html',
//                     'parse_mode': 'Markdown',
//                 }),
//             });

//             if (!textResponse.ok) {
//                 console.error('Error sending text to Telegram:', textResponse.statusText);
//             } else {
//                 return { success: true };
//             }
//         }

//         return { success: false, error: 'Unknown error' };
//     } catch (error) {
//         console.error('Error sending message to Telegram:', error);
//         return { success: false, error: 'Unknown error' };
//     }
// };
