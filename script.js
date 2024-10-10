$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

//Sale-Countdown

let saleEndTime = new Date().getTime() + 8 * 60 * 60 * 1000;

function updateCountdown() {
  let now = new Date().getTime();
  let timeLeft = saleEndTime - now;

  if (timeLeft > 0) {
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);

    $('#countdown-timer').text(hours + 'h ' + minutes + 'm ' + seconds);
  } else {
    $('#countdown-timer').text('Sale ended');
  }
}

setInterval(updateCountdown, 1000);

updateCountdown();

//Language-option
const languageDiv = document.querySelector('.language');
const languageMenu = document.querySelector('.language-menu');

languageDiv.addEventListener('click', function () {
  this.classList.toggle('active');
});

const languageOptions = document.querySelectorAll('.language-menu li');

languageOptions.forEach((option) => {
  option.addEventListener('click', function () {
    languageDiv.innerHTML = this.textContent;
    languageDiv.classList.remove('active');
  });
});

// Dropdown menu
document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.querySelector('.question').addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
});

//hamburger-dropmenu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

//Slider
const slides = document.querySelectorAll('.slider .slide');
const navItems = document.querySelectorAll('.slide-nav li');
let currentSlide = 0;

function updateActiveNavItem() {
  navItems.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function moveSlide(direction) {
  const totalSlides = slides.length;

  if (direction === 'next') {
    currentSlide = (currentSlide + 1) % totalSlides;
  } else if (direction === 'prev') {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  }

  document.querySelector('.slide').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

  updateActiveNavItem();
}

updateActiveNavItem();

document.querySelector('.slick-next').addEventListener('click', function () {
  moveSlide('next');
});
