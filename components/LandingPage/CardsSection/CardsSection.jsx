import Image from 'next/image'
import React from 'react'
import css from './cardsSection.module.scss'
import Card from './Card/Card'

const CardsSection = () => {
    return (
        <div className={css.cards}>
            <Card
                img='/automotive.png'
                title="EXPLORE AUTOMOTIVE"
                desc={
                    <span>
                        Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto
                        <br />
                        customization, vehicle preservation, and performance enhancements.
                    </span>
                }
                route='/automotive'
            />
            <Card
                img='/industries.png'
                title="Other Industries"
                desc={
                    <span>
                        Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto
                        <br />
                        customization, vehicle preservation, and performance enhancements.
                    </span>
                }
                route='/automotive'
            />
        </div>
    )
}

export default CardsSection