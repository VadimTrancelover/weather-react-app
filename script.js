"use strict";

const accordion = document.querySelectorAll('.accordion_forecast-weather')[0];


accordion.addEventListener('click', () => {
    document.querySelector('.accordion-forecast-weather__content').classList.toggle('is-open');
    document.querySelector('.arrow').classList.toggle('rotated');
})