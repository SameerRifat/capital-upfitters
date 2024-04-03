import React from 'react'
import css from './cards.module.scss'
import cx from 'classnames'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/client';

const Cards = ({visibleCards, services=false, search}) => {
    const router = useRouter();
    const handleClick = (item) => {
        if(services){
            router.push(`/services/${item.slug}`)
        }else{
            router.push(`/portfolio/${item.service.slug}`)
        }
    }

    return (
        <>
            <div className={`${css.cards} ${search !== '' && css.search}`}>
                {visibleCards.length !== 0 ? (
                    visibleCards.map((item) => {
                        return (
                            <div className={`${css.card}`} key={item._id} onClick={() => handleClick(item)}>
                                <div className={css.card_img_container}>
                                    <Image
                                        src={services ? urlFor(item.serviceImage).url() : urlFor(item.portfolioImage).url()}
                                        alt={item.serviceTitle}
                                        fill
                                        quality={100}
                                        priority={true}
                                        sizes="(max-width: 400px) 100vw, (max-width: 750px) 50vw, 33vw"
                                        className={css.card_img}
                                    />
                                </div>
                                <div className={css.card_text}>
                                    <h3 className={cx('typoH3', css.card_title)}>{services ? item.serviceTitle : item.service.serviceTitle}</h3>
                                    {services && <p className={cx('typoCaption', css.card_caption)}>{item.smallDescription}</p>}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className={css.no_cards}>No Service Found</p>
                )}
            </div>
        </>
    )
}

export default Cards

// import React from 'react'
// import css from './cards.module.scss'
// import cx from 'classnames'
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { urlFor } from '@/lib/client';
// import sharp from 'sharp';

// const Cards = ({ visibleCards, services = false, search }) => {
//     const router = useRouter();
//     const handleClick = (item) => {
//         if (services) {
//             router.push(`/services/${item.slug}`)
//         } else {
//             router.push(`/portfolio/${item.service.slug}`)
//         }
//     }

//     return (
//         <>
//             <div className={`${css.cards} ${search !== '' && css.search}`}>
//                 {visibleCards.length !== 0 ? (
//                     visibleCards.map((item) => {
//                         const imageSrc = services ? urlFor(item.serviceImage).url() : urlFor(item.portfolioImage).url();
//                         // const processedImage = sharp(imageSrc).resize(500).toBuffer();
//                         let processedImage = imageSrc; // Placeholder for processed image

//                         // Check if running on the server
//                         if (typeof window === 'undefined') {
//                             // Process the image using sharp (server-side only)
//                             sharp(imageSrc)
//                                 .resize(1920, 1400)
//                                 .toBuffer()
//                                 .then((buffer) => {
//                                     processedImage = `data:image/jpeg;base64,${buffer.toString('base64')}`;
//                                 })
//                                 .catch((error) => {
//                                     console.error('Error processing image:', error);
//                                 });
//                         }
//                         return (
//                             <div className={`${css.card}`} key={item._id} onClick={() => handleClick(item)}>
//                                 <div className={css.card_img_container}>
//                                     <Image
//                                         // src={services ? urlFor(item.serviceImage).url() : urlFor(item.portfolioImage).url()}
//                                         src={processedImage}
//                                         alt={item.serviceTitle}
//                                         fill
//                                         quality={100}
//                                         priority
//                                         className={css.card_img}
//                                     />
//                                 </div>
//                                 <div className={css.card_text}>
//                                     <h3 className={cx('typoH3', css.card_title)}>{services ? item.serviceTitle : item.service.serviceTitle}</h3>
//                                     {services && <p className={cx('typoCaption', css.card_caption)}>{item.smallDescription}</p>}
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p className={css.no_cards}>No Service Found</p>
//                 )}
//             </div>
//         </>
//     )
// }

// export default Cards