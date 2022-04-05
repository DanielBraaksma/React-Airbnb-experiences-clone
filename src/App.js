import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    // <Hero />
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item} //send the object as a prop
                // {...item} an alternative way to spread props individually like first method
            />
        )
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
