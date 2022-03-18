import React from 'react';
import '../CSS/FoodCard.css';

const FoodCard = (props) => {
  return (
    <>
    <div className ="card">
      <img className = "card-image-top" src={props.img} alt="" />
      <div className ="card-body">
        <h5 className ="card-text">{props.description}</h5>
      </div>
    </div>
    </>
  )
}

export default FoodCard
