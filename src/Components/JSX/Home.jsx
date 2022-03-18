import React from 'react';
import '../CSS/Hero.css';

import hero from '../../Assets/hero.jpg'
import hero2 from '../../Assets/hero2.jpg'
import MuriS from '../../Assets/MuriS.jpg'

import About from './About';
import Menu from './Menu';
import OurClients from './OurClients';

const Home = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className ="carousel slide" data-bs-ride="carousel">

      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className ="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className ="carousel-inner">
        <div className="text-container">
          <h1>gupta <span>jizz</span></h1>
          <h4>We offer you only quality food</h4>
        </div>
        <div className ="carousel-item active">
          <img src={hero} className="d-block w-100" alt="..."/>
        </div>
        <div className ="carousel-item">
          <img src={hero2} className="d-block w-100" alt="..."/>
        </div>
        <div className ="carousel-item">
          <img src={MuriS} className="d-block w-100" alt="..."/>
        </div>
      </div>

      <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className ="visually-hidden">Previous</span>
      </button>
      <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className ="carousel-control-next-icon" aria-hidden="true"></span>
        <span className ="visually-hidden">Next</span>
      </button>
    </div>
    <About/>
    <Menu/>
    <OurClients/>
    </>
  )
}

export default Home
