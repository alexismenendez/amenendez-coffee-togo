import React from "react";
import "../App.css"

const Header = ({ handleButtonClick }) => {
    return (
        <div className="header">
            <i class="fa-solid fa-bars"></i>
            <h1>Black Cauldron Coffee</h1>
        </div>
    )   
}

export default Header