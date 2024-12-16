// src/components/Header.js

import React from "react";
import '../assets/styles/Header.css'
import land from '../assets/images/landing.png';


const Header = () => {
    return (
        <div className="carousel">
            <img src={land} className="land" alt="land" />
            <div class="w3-overlay w3-show"></div>
            <div className="overlay" >
                <div className="col-sm-2">
                <h1>WELCOME TO ROMAN BADAL CHILDCARE</h1>
                <button className="cta-button">ENROLL TODAY</button>
                </div>
            </div>
        </div>
    );
};

export default Header;