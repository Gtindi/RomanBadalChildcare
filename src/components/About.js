// src/components/About.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/About.css';
import about from '../assets/images/about2.png';
import anime0 from '../assets/images/animation0.png';
import anime1 from '../assets/images/animation1.png';
import anime2 from '../assets/images/animation2.png';
import anime3 from '../assets/images/animation3.png';
import anime4 from '../assets/images/animation4.png';
import anime5 from '../assets/images/animation5.png';
import badge0 from '../assets/images/badge0.png';
import badge1 from '../assets/images/badge1.png';
import badge2 from '../assets/images/badge2.png';


const About = () => {
    return (
        <div className="about" id="about">
            <h1>About Us</h1>
            <div className="about-space">
            <div className="row">
                <div className="col-md-5">            
                <img src={about} className="about-img" alt="about-img" />
                </div>
                <div className="col-md-5">
                    <div class="card" style={{width: "18rem;"}}>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text">Roman Childcare Centre</h6>
                        <p class="card-text">
                        Since 2005, Roman Childcare Center has been dedicated to providing exceptional care for children aged 0 to 13 years. Open 24 hours a day, 7 days a week, we offer flexible options to meet the needs of busy families, including overnight and monthly care. 
                        </p>
                        <p class="card-text">
                        Our center is staffed with highly educated and experienced teachers who are passionate about fostering a love of learning in every child. We believe in hands-on, interactive activities that promote creativity, critical thinking, and social development. From engaging classroom projects to outdoor adventures, we provide children with enriching experiences that inspire curiosity and growth. 
                        </p>
                        <p class="card-text">
                        At Roman Childcare, we go beyond traditional care with exciting opportunities like field trips, mini hikes, and outdoor picnics, helping children explore the world around them in a safe and supportive environment. 
                        </p>
                    </div>
                    </div>
                    <img src={anime0} className="anime0" alt="anime0" />
                    <img src={anime1} className="anime1" alt="anime1" />
                    <img src={anime2} className="anime2" alt="anime2" />
                    <img src={anime3} className="anime3" alt="anime3" />
                    <img src={anime4} className="anime4" alt="anime4" />
                    <img src={anime5} className="anime5" alt="anime5" />
                </div>
            </div>
            </div>
            <div className="card0">
            <div className="row">
                <div className="col-sm-4">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src={badge0} className="badge0" alt="badge0"/>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text">Mission</h6>
                            <p class="card-text">
                                To nurture children’s growth through creativity and kindness.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card" style={{width: "18rem;", backgroundColor: "white;"}}>
                    <img src={badge1} className="badge1" alt="badge1"/>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text">Vision</h6>
                            <p class="card-text">
                                To be the leading childcare center promoting holistic child development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card" style={{width: "18rem;", backgroundColor: "white;"}}>
                    <img src={badge2} className="badge2" alt="badge2"/>
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text">Values</h6>
                            <p class="card-text" style={{ fontSize: "1rem;" }}>
                                Integrity, Compassion, Creativity, and Excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <h5>Why Choose Roman Childcare? </h5>
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} /> Flexible Hours: Open Monday–Sunday, 24/7, including overnight care.</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Experienced Staff: Educated teachers who prioritize individualized attention.</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Interactive Learning: Hands-on activities that spark curiosity and creativity.</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Outdoor Fun: Field trips, hikes, and picnics for memorable experiences.</li>
                    <button type="button" class="btn btn-primary"><a href="#contact" style={{color:'white'}}>Join the Roman Childcare Family Today!</a></button>
                    
                </ul>
                
                </div>
            </div>
        </div>
    );
};

export default About;