import React from "react";
import "../SCSS/Components/_card.scss";
import arrow from "../Image/Icon/right-arrow-svgrepo-com.svg";

function Card(props) {
  const date = props.date.toLocaleDateString();

  return (
    <div className="card">
      <div className="card--header">
        <img src={props.img} alt="img_" className="card--image" />
      </div>
      <div className="card--body">
        <div className="card--stats">
          <span>POSTED {date}</span>
          <span>#DESIGN</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--text">{props.description}</p>
      </div>
      <a className="read" href="https://google.com">
        <p>READ ARTICLE</p>
        <img src={arrow} alt="arrow" className="arrow" />
      </a>
    </div>
  );
}

export default Card;
