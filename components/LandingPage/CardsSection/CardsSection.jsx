import Image from 'next/image'
import React from 'react'
import css from './cardsSection.module.scss'
import Card from './Card/Card'

const CardsSection = ({ cards }) => {
    return (
        <div className={css.cards}>
            {cards.length > 0 && cards.map((item, index) => {
                return (
                    <Card
                        key={index}
                        img={item.cardImage}
                        title={item.cardTitle}
                        desc={item.cardDescription}
                        route={item.route}
                    />
                )
            })}
            {/* <Card
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
            /> */}
        </div>
    )
}

export default CardsSection