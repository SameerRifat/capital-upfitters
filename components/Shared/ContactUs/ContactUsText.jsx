import React, { useState, useEffect } from 'react';
import css from './contactUs.module.scss';
import cx from 'classnames';
import { getFooterText } from '@/apis/settings'; // Assuming this import is correct

const Skeleton = () => (
    <div className={css.skeleton}>
        <div className={css.line}></div>
        <div className={css.line}></div>
        <div className={css.line}></div>
    </div>
);

const ContactUsText = () => {
    const [footerData, setFooterData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFooterText();
                setFooterData(data);
            } catch (error) {
                console.error('Error fetching footer text:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Skeleton />;
    }

    if (!footerData) {
        return <div className='error_message'>Error fetching footer text</div>;
    }

    return (
        <p className={cx('typoCaption', css.description)}>{footerData.text}</p>
    );
};

export default ContactUsText;


// import React, { useState, useEffect } from 'react';
// import css from './contactUs.module.scss';
// import cx from 'classnames';
// import { getFooterText } from '@/apis/settings'; // Assuming this import is correct

// const ContactUsText = () => {
//     const [footerData, setFooterData] = useState(null);
//     const [isLoading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getFooterText();
//                 setFooterData(data);
//             } catch (error) {
//                 console.error('Error fetching footer text:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (isLoading) {
//         return <p className={cx('typoCaption', css.description)}>Loading...</p>;
//     }

//     if (!footerData) {
//         return <div className='error_message'>Error fetching footer text</div>;
//     }

//     return (
//         <p className={cx('typoCaption', css.description)}>{footerData.text}</p>
//     );
// };

// export default ContactUsText;
