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
                        Auto & Truck Accessories to fit your needs. As well as a comprehensive range of
                        <br />
                        advanced automotive treatments, including Patriot Liner, Waxoyl, Eco Clear, and PPF,
                        <br />
                        designed to enhance both the appearance and performance of your vehicle.
                        <br />
                        With us, you're fully covered.
                    </span>
                }
                route='/automotive'
            />
            <Card
                img='/other-industries/Equipment-rental.jpg'
                title="Other Industries"
                desc={
                    <span>
                        Our expertise in commercial solutions, particularly in rust mitigation and structural 
                        <br />
                        integrity, ensures your assets are protected, maintenance is simplified, and operations 
                        <br />
                        run smoothly. Trust us to safeguard your investments, providing a secure, unshakable 
                        <br />
                        foundation for your project. With us, your operations and assets are in capable hands, 
                        <br />
                        guaranteed to withstand the test of time.
                    </span>
                }
                route='/commercial'
            />
        </div>
    )
}

export default CardsSection