// src/components/Header.js

import React from "react";
import '../assets/styles/Header.css'
import land from '../assets/images/landing.png';


const Header = () => {
    return (
        <div id="home" className="carousel">
            <img src={land} className="land" alt="land" />
            <div class="w3-overlay w3-show"></div>
            <div className="overlay" >
                {/* <div className="land-text"> */}
                <h1><strong>WELCOME TO ROMAN BADAL CHILDCARE</strong></h1>
                <button className="cta-button" href="#contact"><a href="#contact" >Enroll Today</a></button>
                
                {/* </div> */}
            </div>
        </div>
    );
};

export default Header;