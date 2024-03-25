import React from 'react'
import css from './cards.module.scss'
import cx from 'classnames'
import Iconify from '@/components/iconify/iconify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/client';

const Cards = ({visibleCards, services=false}) => {
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
            <div className={css.cards}>
                {visibleCards.length !== 0 ? (
                    visibleCards.map((item) => {
                        return (
                            <div className={`${css.card}`} key={item._id} onClick={() => handleClick(item)}>
                                <div className={css.card_img_container}>
                                    <Image
                                        // src={item.imageSrc}
                                        src={services ? urlFor(item.serviceImage).url() : urlFor(item.portfolioImage).url()}
                                        alt={item.serviceTitle}
                                        fill
                                        quality={100}
                                        priority={true}
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