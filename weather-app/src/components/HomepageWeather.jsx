import React from 'react'
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

function HomepageWeather() {

    const [city, setCity] = React.useState("");
    const [newCity, setNewCity] = React.useState(city);
    const [weatherData, setWeatherData] = React.useState('');
    const [newWeatherData, setNewWeatherData] = React.useState({})

    const onSetNewWeatherData = () => {
        setNewWeatherData(weatherData)
    }

    const onChange = (e) => {
        setCity(e.target.value)
    }

    const onSetNewCity = (city) => {
        if(city) {
            const newCity = city;
            setNewCity(newCity)
            console.log(newCity)
        }
    };



    const API_KEY = '3f1b2782ee3a649ad85648d928019566';

    const getWeather = (city) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${API_KEY}`)
            .then(response => {
                return response.json();
            })
            // .then((data) => console.log(data))
            .then((data) => setWeatherData(data))
            .catch(err => {
                console.error(err);
            });

    }

    const onHandleSetCity = (e) => {
        e.preventDefault();
        onSetNewCity(city);
        getWeather(city);
        onSetNewWeatherData();
        setCity("");
    }


    React.useEffect(() => [
        console.log(weatherData)
    ],[weatherData])

    const weatherCity = weatherData.weather;

    return (
        <div>
            <div className="wrapper"> 
                <div className="search-bar"> 
                <form id="search-city" onSubmit={onHandleSetCity}> 
                    <input 
                        value={city}
                        onChange={onChange}
                        type="text" 
                        className="input-search" 
                        name="city" 
                        placeholder="Введите название..." 
                        autoFocus=""/> 
                </form> 
                </div>{
                    weatherData ? <CurrentWeather
                                    city={weatherData.name}
                                    country={weatherData.sys.country}
                                    temp={weatherData.main.temp}
                                    iconWeather={weatherData.weather ? weatherCity.map(obj => obj.icon) : ''}
                                    weather={weatherData.weather ? weatherCity.map(obj => obj.description) : ''}
                                    windSpeed={weatherData.wind.speed}
                                    pressure={weatherData.main.pressure}
                                    /> : ''
                }
                    
                    <ForecastWeather/> 
                
                {/* <div className="container">
                    <div className="accordion">
                    <div className="accordion_forecast-weather">
                        <h3 className="accordion-forecast-weather__title">Прогноз погоды на ближайшие дни <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></h3>
                        <div className="accordion-forecast-weather__content">
                            <div className="accordion-forecast-weather__content-inside">
                            <div className="forecast-weather">
                                <div className="forecast-day-weather">
                                    <p className="day">19.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">20.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">21.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">22.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">23.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">24.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                                <div className="forecast-day-weather">
                                    <p className="day">25.11</p>
                                    <img alt="weather" src="http://openweathermap.org/img/wn/10d@2x.png"/> 
                                    <h1 className="current-temperature">26°c</h1> 
                                    <h4>Дождь</h4> 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>  */}
            </div>
    </div>
    )
}

export default HomepageWeather