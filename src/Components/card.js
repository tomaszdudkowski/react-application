import React from "react";
import "../SCSS/Components/_card.scss";
import star from "../Image/Card_Image/star-icon-48.png";

function Card(props) {

  const date = props.date.toDateString();

  const [vote, setVote] = React.useState(0);

  function add() {
    setVote(prevVote => prevVote + 1)
  }

  function substract() {
    setVote(prevVote => prevVote - 1)
  }

  return (
    <div className="card">
      <img src={props.img} alt="img_" className="card--image" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star" />
        <span className="bold">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span >{date}</span>
      </div>
      <div>
        <span className="bold vote" onClick={add}>up vote</span>
        <span className="bold gray">{vote}</span>
        <span className="bold vote" onClick={substract}>down vote</span>
      </div>
      <p>{props.title}</p>
      <p className="bold">
        {props.description}
      </p>

    </div>
  );
}

export default Card;
