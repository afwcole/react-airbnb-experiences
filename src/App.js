import React, { PureComponent } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardsData from "./data"
import "./style.css"

export default function App() {
    const cards = cardsData.map(cardData => {
        return <Card 
            key={cardData.id}
            {...cardData}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}