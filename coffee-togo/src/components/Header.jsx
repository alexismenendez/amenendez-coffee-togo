import React from "react";
import "../App.css"
import logo from "../assets/logo.png"

const Header = ({ handleButtonClick }) => {
    return (
        <div className="header">
            <i class="fa-solid fa-bars"></i>
            <img src={logo}/>
        </div>
    )   
}

export default Header