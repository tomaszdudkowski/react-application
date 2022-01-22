import React from "react";
import "../SCSS/Components/_card.scss";
import star from "../Image/Card_Image/star-icon-48.png";

function Card() {
    return(
        <div className="card">
          <img src={require('../Image/Card_Image/card_1.jpg')} alt="img_1" className="card--image" />
          <div className="card--stats">
              <img className="card--star" src={star} alt="star"/>
              <span className="bold">5.0</span>
              <span className="gray">(6)</span>
              <span className="gray">@ Warsaw</span>
          </div>
          <p>Proffesionl photography course in Warsaw</p>
          <p><span className="bold">From PLN4500</span> / person</p>
        </div>
        
    );
}

export default Card;