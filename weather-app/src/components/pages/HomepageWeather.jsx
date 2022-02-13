import React from "react";

//Components
import CurrentWeather from "../CurrentWeather";
import ForecastWeather from "../ForecastWeather";
import WeatherLoadedBlock from "../WeatherBlock/WeatherBlock";
import SearchLogoBlock from "../SeachLogo/SearchLogoBlock";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

//Redux
import { SearchWeather, fetchWeather, setLoading, fetchForecast} from '../../redux/actions/searchActions';
import {useDispatch, useSelector} from 'react-redux';



function HomepageWeather() {
  const [city, setCity] = React.useState("");
  const dispatch = useDispatch();
  const text = useSelector(({search}) => search.text);
  const weather = useSelector(({search}) => search.weatherData);
  const loading = useSelector(({search}) => search.loading);
  const error = useSelector(({search}) => search.error);
  const weatherForecast = useSelector(({search}) => search.forecastWeatherData);

  const onChange = (e) => {
    setCity(e.target.value);
    dispatch(SearchWeather(e.target.value))
  };


  const handleToSubmit = () => {
    localStorage.setItem(1, city);
  }


  const onHandleSetCity = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(text));
    dispatch(fetchForecast(text))
    dispatch(setLoading());
    setCity("");
    handleToSubmit();
  };

  const weatherCity = weather.weather;

  const ViewWeatherBlock = (

    <CurrentWeather
      city={weather ? weather.name : ""}
      country={weather ? weather.sys.country : ""}
      temp={weather ? weather.main.temp : ""}
      iconWeather={
        weather.weather ? weatherCity.map((obj) => obj.icon) : ""
      }
      weather={
        weather.weather ? weatherCity.map((obj) => obj.description) : ""
      }
      windSpeed={weather ? weather.wind.speed : ""}
      pressure={weather ? weather.main.pressure : ""}
    />
  );


  let messageForUser;

if (error) {
    messageForUser = <ErrorMessage/>;
  } else if (loading) {
    messageForUser = <WeatherLoadedBlock/>;
  } else {
    messageForUser = ViewWeatherBlock;
  }


  const cityWeather = localStorage.getItem(1)


  let forecastDays = '';
  forecastDays = weatherForecast && weatherForecast.length > 0 ? weatherForecast.map((day, index) => <ForecastWeather key={index} day={day} />) : '';


React.useEffect(() => {
  const dataFetch = (action) => 
  cityWeather ? dispatch(action(cityWeather)) : '';
  dataFetch(fetchWeather);
  dataFetch(fetchForecast);
}, [cityWeather])


  return (
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
            autoFocus=""
          />
        </form>
      </div>
      <div>
          {error ? messageForUser : (weather ? messageForUser : <SearchLogoBlock/>)}
      </div>
      <div className="forecast-weather">
          {forecastDays}
      </div>
      
    <>
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
              </>
    </div>
  );
}

export default HomepageWeather;
