window.onload = () => {
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

    // move to target slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    // update dots
    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    };

    // when click right
    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const firstSlide = slides[0];
      const firstDot = dots[0];
      if (nextSlide === null) {
        moveToSlide(track, currentSlide, firstSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const nextDot = firstDot;
        updateDots(currentDot, nextDot);
      } else {
        moveToSlide(track, currentSlide, nextSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const nextDot = currentDot.nextElementSibling;
        updateDots(currentDot, nextDot);
      }
    });

    // when click left
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const lastSlide = slides.at(-1);
      const lastDot = dots.at(-1);
      if (prevSlide === null) {
        moveToSlide(track, currentSlide, lastSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const prevDot = lastDot;
        updateDots(currentDot, prevDot);
      } else {
        moveToSlide(track, currentSlide, prevSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const prevDot = currentDot.previousElementSibling;
        updateDots(currentDot, prevDot);
      }
    });

    // when click nav indicators
    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");

      if (!targetDot) return;

      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".current-slide");
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
    });

    const automaticSlider = () => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const firstSlide = slides[0];
      const firstDot = dots[0];
      if (nextSlide === null) {
        moveToSlide(track, currentSlide, firstSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const nextDot = firstDot;
        updateDots(currentDot, nextDot);
      } else {
        moveToSlide(track, currentSlide, nextSlide);
        const currentDot = dotsNav.querySelector(".current-slide");
        const nextDot = currentDot.nextElementSibling;
        updateDots(currentDot, nextDot);
      }
    };

    //automatic next slide
    setInterval(() => {
      automaticSlider();
    }, 10000);
  };