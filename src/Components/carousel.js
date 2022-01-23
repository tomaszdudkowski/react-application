import "../SCSS/Components/_carousel.scss";
import image1 from "../Image/taylor-vick-M5tzZtFCOfs-unsplash.jpg";
import image2 from "../Image/tianyi-ma-WiONHd_zYI4-unsplash.jpg";

import left__button from "../Image/Icon/iconmonstr-arrow-64-left.svg";
import right__button from "../Image/Icon/iconmonstr-arrow-25-right.svg";

function Carousel() {
  window.onload = function () {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    // buttons
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    // dots nav
    const dotsNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotsNav.children);
    // slide width
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    // when click right
    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = nextSlide.style.left;

      track.style.transform = "translateX(-" + amountToMove + ")";
      currentSlide.classList.remove("current-slide");
      nextSlide.classList.add("current-slide");
    });

    // when click left
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const amountToMove = prevSlide.style.left;

      track.style.transform = "translateX(-" + amountToMove + ")";
      currentSlide.classList.remove("current-slide");
      prevSlide.classList.add("current-slide");
    });
  };

  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left">
        <img src={left__button} alt="left"></img>
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track">
          <li className="carousel__slide current-slide">
            <img className="carousel__image" src={image1} alt=""></img>
          </li>
          <li className="carousel__slide">
            <img className="carousel__image" src={image2} alt=""></img>
          </li>
          <li className="carousel__slide">
            <img className="carousel__image" src={image1} alt=""></img>
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
