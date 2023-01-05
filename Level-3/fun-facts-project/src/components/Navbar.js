import React from "react"
import icon from "/home/sharon/development/assignments/Level-3/fun-facts-project/src/react-icon-small.png"

export default function Navbar(){
    return (
        <nav>
        <img src = {icon} alt = 'react-icon-small' className = "nav--icon" />
        <h3 className = "nav--logo_text">ReactFacts</h3>
        <h4 className = "nav--title">React Course - Project 1</h4>
    </nav>
    )
}