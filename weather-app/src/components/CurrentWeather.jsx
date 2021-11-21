import React from 'react'

function CurrentWeather({city, country,temp, iconWeather, weather, windSpeed, pressure}) {

    const currentTemp = Math.round(temp)
    const currentWindSpeed = Math.round((windSpeed)*10)/10;

    return (
        <div>
            <div className="current-weather"> 
                    <h3 className="current-city">{city}, {country}</h3> 
                    <img alt="weather" src={`http://openweathermap.org/img/wn/${iconWeather}@2x.png`}/> 
                    <h1 className="current-temperature">{currentTemp}°c</h1> 
                    <h4>{weather}</h4> 
                    <p>скорость ветра: {currentWindSpeed} м/с</p> 
                    <p>давление: {pressure} мм рт.столба</p> 
                </div>
        </div>
    )
}

export default CurrentWeather
