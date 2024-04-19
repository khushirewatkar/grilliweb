
document.addEventListener('DOMContentLoaded', function() {
    const navOpenBtn = document.querySelector('.nav-open-btn');
    const navBar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');

    navOpenBtn.addEventListener('click', function() {
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('nav-active');
    });

    // Close the menu when the overlay is clicked
    overlay.addEventListener('click', function() {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('nav-active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const navBar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    closeBtn.addEventListener('click', function() {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('nav-active');
    });

    // Close the menu when the overlay is clicked
    overlay.addEventListener('click', function() {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('nav-active');
    });
});


const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1){
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click",slidePrev);

// auto slide 

let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
}

addEventOnElements([heroSliderNextBtn,heroSliderPrevBtn],"mouseover",function () {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn,heroSliderPrevBtn],"mouseout",autoSlide);

window.addEventListener("load", autoSlide);
