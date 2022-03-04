import "../SCSS/Components/_carousel.scss";
import "../../node_modules/animate.css/animate.css";
import Slide from "./Elements/_Slide";
import image1 from "../Image/taylor-vick-M5tzZtFCOfs-unsplash.jpg";
import image2 from "../Image/tianyi-ma-WiONHd_zYI4-unsplash.jpg";
import image3 from "../Image/donald-giannatti-Wj1D-qiOseE-unsplash.jpg";

import left__button from "../Image/Icon/iconmonstr-angel-left-circle-thin.svg";
import right__button from "../Image/Icon/iconmonstr-angel-right-circle-thin.svg";

import slider from "../JS/Carousel";

function Carousel() {

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left">
        <img src={left__button} alt="left"></img>
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          <li className="carousel__slide current-slide">
            <Slide
              tags="CLOUD & CYBERSECURITY"
              title="Rackspace Technology: Delivering multi-cloud solutions"
              desc=""
              img={image1}
            />
          </li>
          <li className="carousel__slide">
            <Slide
              tags="AI & MACHINE LEARNING"
              title="The Top AI Application for Business in 2022"
              desc="As digital transformation continues and AI becomes more accessible,
              we take a look at some of the top AI applications for business in 2022"
              img={image2}
            />
          </li>
          <li className="carousel__slide">
            <Slide
              tags="DATA & DATA ANALYTICS"
              title="Data Analytics: 2022 Trends and Opportunities"
              desc=""
              img={image3}
            />
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
    </div>
  );
}

export default Carousel;
