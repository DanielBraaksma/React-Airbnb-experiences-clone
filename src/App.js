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
            />
        )
    })

    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}
