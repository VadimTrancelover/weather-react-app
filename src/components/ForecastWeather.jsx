import React from 'react';

function ForecastWeather({day}) {

    function timeConverter(UNIX_timestamp) { 
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let month = months[a.getUTCMonth()];
        let date = a.getUTCDate();

        let days = date < 10 ? '0' + date : date;
       
        const time = days + '.' + month;
        return time;
      }

    const temp = day.main.temp;
    const discription = day.weather ? day.weather.map((weather) => weather.description) : ""
    const icons = day.weather ? day.weather.map((weather) => weather.icon) : ""
    
    const tempRound = (temp) => {
        return Math.round(temp)
    }  

    const {
        dt,
    } = day;

    console.log(discription)

    return (
                <div className="forecast-day-weather">
                    <p className="day">{timeConverter(dt)}</p>
                    <img alt="weather" src={`http://openweathermap.org/img/wn/${icons}@2x.png`}/> 
                    <h1 className="current-temperature">{tempRound(temp)}°c</h1> 
                    <h4>{discription}</h4> 
                </div>

    )
}

export default ForecastWeather
