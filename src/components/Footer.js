// src/components/Footer.js

import React from "react";
import '../assets/styles/Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/images/logo.svg';


const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo} className="logo" alt="logo" />
            <div className="map0">
                <p><a 
                href="https://www.google.com/maps?q=1054+S+130th+St,+Burien,+WA+98168,+USA" 
                target="_blank" 
                rel="noreferrer"
                className="find-text"
                >
                    Find us
                </a></p>

                <p><iframe 
                className="map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2528710844297!2d-122.3363214!3d47.480897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490605e7ff244f1%3A0x21a71329f5c81a7d!2s1054%20S%20130th%20St%2C%20Burien%2C%20WA%2098168%2C%20USA!5e0!3m2!1sen!2sus!4v1670532949568" 
                frameBorder="0" 
                aria-hidden="false" 
                tabIndex="0" 
                title="Roman Badal Childcare Location Map"
                ></iframe></p>

            </div>
            <p style={{ color:"white;" }} id="copyright">© 2024 Roman Badal Childcare. All rights reserved.</p>
        </div>
    );
}

export default Footer;