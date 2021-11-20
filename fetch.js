'use strict';

const weatherDate = [];

const API_KEY = '3f1b2782ee3a649ad85648d928019566';

const getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Лондон&appid=${API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then((data) => console.log(data))
        .catch(err => {
            console.error(err);
        });

}

getWeather();
console.log(weatherDate.message)

