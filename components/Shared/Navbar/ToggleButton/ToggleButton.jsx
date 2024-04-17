'use client'
import React, { useEffect } from 'react';
import css from './toggleButton.module.scss';
import { useActiveIndustryContext } from '@/context/ActiveIndustriesProvider';
import { usePathname, useRouter } from 'next/navigation';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const ToggleButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { activeIndustry, setActiveIndustry } = useActiveIndustryContext();

    const handleChange = () => {
        const newIndustry = activeIndustry === 'commercial' ? 'automotive' : 'commercial';
        setActiveIndustry(newIndustry);
        router.push(`/${newIndustry}`);
        window.localStorage.setItem("activeIndustry", newIndustry);
    };

    useEffect(() => {
        const storedIndustry = window.localStorage.getItem("activeIndustry");
        if (storedIndustry) {
            setActiveIndustry(storedIndustry);
        }
    }, []);

    return (
        <>
            <label className={css.label}>{activeIndustry === 'commercial' ? 'Commercial' : 'Automotive'}</label>
            <label className={css.switch} data-tooltip-id="my-tooltip" data-tooltip-content={activeIndustry === 'commercial' ? 'Switch to Automotive' : 'Switch to Other Industries'}>
                <input type="checkbox" checked={activeIndustry === 'commercial'} onChange={handleChange} />
                <span className={css.slider}></span>
            </label>
            <Tooltip id="my-tooltip" place='top' className={css.tooltip} arrowColor="rgba(92, 225, 230, 1)" />
        </>
    );
};

export default ToggleButton;

// 'use client'

// import React, { useEffect, useState } from 'react';
// import css from './toggleButton.module.scss';
// import { useActiveIndustryContext } from '@/context/ActiveIndustriesProvider';
// import { usePathname, useRouter } from 'next/navigation';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css'

// const ToggleButton = () => {
//     const router = useRouter();
//     const pathname = usePathname();
//     const { activeIndustry, setActiveIndustry } = useActiveIndustryContext();
//     const [isChecked, setIsChecked] = useState(activeIndustry === 'commercial');

//     const handleChange = () => {
//         const newIndustry = isChecked ? 'automotive' : 'commercial';
//         setIsChecked(!isChecked);
//         setActiveIndustry(newIndustry);
//         router.push(`/${newIndustry}`);
//         window.localStorage.setItem("activeIndustry", newIndustry);
//     };

//     // const handleChange = () => {
//     //     setIsChecked(!isChecked);
//     //     if (isChecked) {
//     //         setActiveIndustry('automotive');
//     //     } else {
//     //         setActiveIndustry('commercial');
//     //     }
//     // };

//     useEffect(() => {
//         if(activeIndustry == 'commercial'){
//             setIsChecked(true)
//         }else{
//             setIsChecked(false)
//         }
//     }, []);
//     // useEffect(() => {
//     //     const currentRoute = pathname.replace(/^\//, '');
//     //     if (activeIndustry !== currentRoute) {
//     //         router.push(`/${activeIndustry}`);
//     //     }
//     // }, [activeIndustry]);

//     return (
//         <>
//             <label className={css.label}>{activeIndustry === 'commercial' ? 'Other Industries' : 'Automotive'}</label>
//             <label className={css.switch} data-tooltip-id="my-tooltip" data-tooltip-content={activeIndustry === 'commercial' ? 'Switch to Automotive' : 'Switch to Other Industries'}>
//                 <input type="checkbox" checked={isChecked} onChange={handleChange} />
//                 <span className={css.slider}></span>
//             </label>
//             <Tooltip id="my-tooltip" place='top' className={css.tooltip} arrowColor="rgba(92, 225, 230, 1)" />
//         </>
//     );
// };

// export default ToggleButton;
