import "../SCSS/Components/_carousel.scss";
import carousel from "../JS/carousel";
import image from "../Image/taylor-vick-M5tzZtFCOfs-unsplash.jpg";

import left__button from "../Image/Icon/iconmonstr-arrow-64-left.svg";
import right__button from "../Image/Icon/iconmonstr-arrow-25-right.svg";

function Carousel() {
  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left">
        <img src={left__button} alt="left"></img>
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          <li className="carousel__slide">
            <img className="carousel__image" src={image} alt=""></img>
          </li>
          <li className="carousel__slide">
            <img className="carousel__image" src={image} alt=""></img>
          </li>
          <li className="carousel__slide">
            <img className="carousel__image" src={image} alt=""></img>
          </li>
        </ul>
      </div>
      <button className="carousel__button carousel__button--right">
        <img src={right__button} alt="right"></img>
      </button>

      <div className="carousel__nav">
          <button className="carousel__indicator current-slide"></button>
          <button className="carousel__indicator"></button>
          <button className="carousel__indicator"></button>
      </div>

      <script src={carousel}></script>
    </div>
  );
}

export default Carousel;
