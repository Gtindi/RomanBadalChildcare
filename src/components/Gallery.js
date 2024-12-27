// src/components/Gallery.js

import React from "react";
import '../assets/styles/Gallery.css';
// import photo1 from '../assets/images/image0.jpg';
// import photo2 from '../assets/images/image1.jpg';
// import photo3 from '../assets/images/image2.jpg';
// import photo4 from '../assets/images/image3.jpg';
// import photo5 from '../assets/images/image4.jpg';
// import photo6 from '../assets/images/image5.jpg';
// import photo7 from '../assets/images/image6.jpg';
// import photo8 from '../assets/images/image7.jpg';
// import photo9 from '../assets/images/image8.jpg';
// import photo10 from '../assets/images/image9.jpg';
// import photo11 from '../assets/images/image10.jpg';
// import photo12 from '../assets/images/image11.jpg';
// import photo12 from '../assets/images/image12.jpg';
import photo13 from '../assets/images/image13.jpg';
// import photo15 from '../assets/images/image14.jpg';
// import photo16 from '../assets/images/image15.jpg';
// import photo17 from '../assets/images/image16.jpg';
// import photo18 from '../assets/images/image17.jpg';
// import photo19 from '../assets/images/image18.jpg';
import photo19 from '../assets/images/image19.jpg';
import photo20 from '../assets/images/image20.jpg';
import photo21 from '../assets/images/image21.jpg';
import photo22 from '../assets/images/image22.jpg';
import photo23 from '../assets/images/image23.jpg';
import photo24 from '../assets/images/image24.jpg';
import photo25 from '../assets/images/image25.jpg';
// import photo27 from '../assets/images/image26.jpg';
// import photo28 from '../assets/images/image27.jpg';
// import photo29 from '../assets/images/image28.jpg';
import photo29 from '../assets/images/image29.jpg';
// import photo31 from '../assets/images/image30.jpg';
// import photo32 from '../assets/images/image31.jpg';
// import photo33 from '../assets/images/image32.jpg';
// import photo34 from '../assets/images/image33.jpg';
// import photo35 from '../assets/images/image34.jpg';
import photo35 from '../assets/images/image35.jpg';
// import photo37 from '../assets/images/image36.jpg';
// import photo38 from '../assets/images/image37.jpg';

// import photo39 from '../assets/images/image38.jpg';
// import photo40 from '../assets/images/image39.jpg';
// import photo41 from '../assets/images/image40.jpg';
// import photo42 from '../assets/images/image41.jpg';
// import photo43 from '../assets/images/image42.jpg';
// import photo44 from '../assets/images/image43.jpg';
// import photo45 from '../assets/images/image44.jpg';
import photo45 from '../assets/images/image45.jpg';
// import photo47 from '../assets/images/image46.jpg';
import photo47 from "../assets/images/image47.jpg";
import photo48 from "../assets/images/image48.jpg";
import photo51 from "../assets/images/image51.jpg";





import anime6 from '../assets/images/animation6.png';
import anime7 from '../assets/images/animation7.png';
import anime8 from '../assets/images/animation8.png';
import anime9 from '../assets/images/animation9.png';
import anime10 from '../assets/images/animation10.png';
import anime11 from '../assets/images/animation11.png';
import anime12 from '../assets/images/animation12.png';
import anime13 from '../assets/images/animation13.png';
import anime14 from '../assets/images/animation14.png';
import anime15 from '../assets/images/animation15.png';


const Gallery = () => {
    return (
        <div id="gallery" className="gallery">  
            <h1>Gallery</h1>
            <div className="animation">
                <img src={anime6} className="anime6" alt="anime6" />
                <img src={anime7} className="anime7" alt="anime7" />
                <img src={anime8} className="anime8" alt="anime8" />
                <img src={anime9} className="anime9" alt="anime9" />
                <img src={anime10} className="anime10" alt="anime10" />
                <img src={anime11} className="anime11" alt="anime11" />
                <img src={anime12} className="anime12" alt="anime12" />
                <img src={anime13} className="anime13" alt="anime13" />
                <img src={anime14} className="anime14" alt="anime14" />
                <img src={anime15} className="anime15" alt="anime15" />
            </div>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                <div className="imageResize">
                    <div class="carousel-item active">
                    <img src={photo13} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo19} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo20} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo21} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo22} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo23} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo24} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo25} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo29} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo35} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo45} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo47} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo48} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={photo51} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Gallery;