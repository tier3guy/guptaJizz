import React from 'react';
import FoodCard from './FoodCard';
import '../CSS/Menu.css';
import Muri from '../../Assets/Muri2.jpg';
import Chola from '../../Assets/Chola.jpg';
import Pav from '../../Assets/PavBhaji.jpg';
import AlloTikki from '../../Assets/AlloTikki.jpg';
import Papri from '../../Assets/PapriChaat.jpg';
import Sandwich from '../../Assets/Sandwich.jpg';

const Menu = () => {
  return (
    <section className = "Menu">
      <h1><span style = {{color : 'var(--light-red)'}}>Our</span> Menus</h1>
      <div className = "food-container">
        <FoodCard img={Muri} description = "Bhel Puri"/>
        <FoodCard img={Chola} description = "Chole Bhature"/>
        <FoodCard img={Pav} description = "Pav Bhaji"/>
      </div>
      <div className = "food-container">
        <FoodCard img={AlloTikki} description = "Allo Tikia Chaat"/>
        <FoodCard img={Papri} description = "Papri Chaat"/>
        <FoodCard img={Sandwich} description = "Bread Sandwich"/>
      </div>

    </section>
  )
}

export default Menu
