import React from "react";
import "../SCSS/Components/_card.scss";
import arrow from "../Image/Icon/right-arrow-svgrepo-com.svg";

function Card({ title, description, img, date }) {
  const newDate = date.toLocaleDateString();

  return (
    <div className="card">
      <div className="card--header">
        <img src={img} alt="img_" className="card--image" />
      </div>
      <div className="card--body">
        <div className="card--stats">
          <span>POSTED {newDate}</span>
          <span>#DESIGN</span>
        </div>
        <p className="card--title">{title}</p>
        <p className="card--text">{description}</p>
      </div>
      <a className="read" href="https://google.com">
        <p>READ ARTICLE</p>
        <img src={arrow} alt="arrow" className="arrow" />
      </a>
    </div>
  );
}

export default Card;
