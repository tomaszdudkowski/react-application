import "../SCSS/Components/_card.scss";
import star from "../Image/Card_Image/star-icon-48.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="img_" className="card--image" />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star" />
        <span className="bold">{props.rate}</span>
        <span className="gray">(6)</span>
        <span >{city}</span>
      </div>
      <p>Proffesionl photography course in {city}</p>
      <p>
        <span className="bold">From PLN{props.cost}</span> / person
      </p>
    </div>
  );
}

export default Card;
