// src/components/Program.js

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaintBrush,       // For Programming
    faChessPawn, 
    faChessQueen, 
    faHatWizard, 
    faDice, 
    faPalette, 
    faHeart, 
    faPuzzlePiece 
} from '@fortawesome/free-solid-svg-icons';

import "../assets/styles/Programs.css";

const Contact = () => {
  return (
    <div id= "programs" className="services">
            
      <div style={{ marginBottom: "0%" }}>
        <section
          id="service"
          className="services-mf route"
          style={{ backgroundColor: "white" }}
        >
          <div className="service-section">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="programs"><strong>Programs</strong></h3>
                    <p className="subtitle-a">
                        At our daycare, we believe in creating magical moments every day, blending fun and education to inspire young hearts and minds. Here's a glimpse into the exciting experiences we offer:
                    </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faChessPawn} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Creative Play & Imagination</h2>
                    <p className="s-description text-center">
                    Through painting, playdough sculpting, dress-up, and arts & crafts, kids unlock their creativity while having a blast.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faChessQueen} />

                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Interactive Learning</h2>
                    <p className="s-description text-center">
                        We make learning fun with circle time, reading sessions, and hands-on activities that teach colors, shapes, numbers, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faHatWizard} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Music & Movement</h2>
                    <p className="s-description text-center">
                        From dancing and singing to exploring rhythms, your little one will love expressing themselves through music and movement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faDice} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Adventures in the Great Outdoors</h2>
                    <p className="s-description text-center">
                        Nature is our playground! We go hiking, enjoy water activities in the summer, explore gardens in the spring, and make outdoor play a daily delight.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faHeart} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Hands-On Discovery</h2>
                    <p className="s-description text-center">
                        Kids embrace curiosity through sensory play, simple science experiments, and building with blocks, fostering lifelong problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faPalette} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Games, Fun, & Friendships</h2>
                    <p className="s-description text-center">
                        Board games, team activities, and imaginative play bring kids together and nurture social development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <FontAwesomeIcon className='icon' icon={faPaintBrush} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Learning Support & Beyond</h2>
                    <p className="s-description text-center">
                        We help children excel by offering homework assistance and preparing them for kindergarten in a supportive environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                    <FontAwesomeIcon className='icon' icon={faPuzzlePiece} />
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Exciting Outings & Field Trips</h2>
                    <p className="s-description text-center">
                        From movie days to visits to local parks and libraries, we provide enriching opportunities to expand their world.
                    </p>
                  </div>
                </div>
              </div>
            <p className="subtitle-a">
                Join our loving daycare community, where every activity is thoughtfully designed to inspire confidence, creativity, and curiosity. Together, let’s make each day unforgettable experience for your child!
            </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
