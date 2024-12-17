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
                <div className="col-sm-2">
                <h1>WELCOME TO ROMAN BADAL CHILDCARE</h1>
                <button className="cta-button" href="#contact"><a href="#contact" style={{color:'white'}}>ENROLL TODAY</a></button>
                
                </div>
            </div>
        </div>
    );
};

export default Header;