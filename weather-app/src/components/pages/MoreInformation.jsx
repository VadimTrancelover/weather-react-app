import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {fetchWeather} from '../../redux/actions/searchActions';

function MoreInformationPage() {

    const dispatch = useDispatch();
    const weather = useSelector(({search}) => search.weatherData);
    const text =useSelector(({search}) => search.text);


    const clouds = weather ? weather.clouds.all : '';
    const tempFeelsLike = weather ? weather.main.feels_like : '';
    const humidity = weather ? weather.main.humidity : '';
    const pressure = weather ? weather.main.pressure : '';
    const temp = weather ? weather.main.temp : '';
    const tempMin = weather ? weather.main.temp_min : '';
    const tempMax = weather ? weather.main.temp_max : '';
    const visibility = weather ? weather.visibility : '';
    const windDeg = weather ? weather.wind.deg : '';
    const windSpeed = weather ? weather.wind.speed : '';
    const iconWeather = weather ? weather.weather.map((obj) => obj.icon) : '';
    const sunrise = weather ? weather.sys.sunrise : '';
    const sunset = weather ? weather.sys.sunset : '';
    const timezone = weather ? weather.timezone : '';

    const currentWindSpeed = Math.round((windSpeed)*10)/10;

    function timeConverter(UNIX_timestamp) { 
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let year = a.getUTCFullYear();
        let month = months[a.getUTCMonth()];
        let date = a.getUTCDate();
        let hour = a.getUTCHours();
        let min = a.getUTCMinutes(); 
        let sec = a.getUTCSeconds();

        let mins = min < 10 ? '0' + min : min;
        let hours = hour < 10 ? '0' + hour : hour;

        const timeShift = (UNIX_timeshift) => {
            let a = new Date(UNIX_timeshift * 60);
            let hourShift = a.getHours();
    
            return hourShift;
        }
        
        let hourTimeShift = (+hours) + (+timeShift(timezone));
        
        //const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        let shiftTimeHoursMin = hourTimeShift + ':' + mins + ':' + sec;
        return shiftTimeHoursMin;
      }
    

    const tempRound = (temp) => {
        return Math.round(temp)
    }

    React.useEffect(() => {
        dispatch(fetchWeather(text))
    },[text])

    return (
        <div className="wrapper-detail-information">
            <div className="detail-information">
                <div className="left-column_information">
                    <div className="weather-icon">
                        <img alt="weather" src={`http://openweathermap.org/img/wn/${iconWeather}@4x.png`}/>
                    </div>
                    <div className="detail-temperature">
                        <h1 className="temperature">{tempRound(temp)}°C</h1>
                    </div>
                </div>
                <div className="right-column_information">
                    <div className="information-parametr">
                        <h3>Облачность:</h3> 
                        <p>{clouds} %</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Ощущается как:</h3>
                        <p>{tempRound(tempFeelsLike)}°C</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Влажность:</h3>
                        <p>{humidity} %</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Давление:</h3>
                        <p>{pressure} mbar</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Минимальная температура:</h3>
                        <p>{tempRound(tempMin)}°C</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Максимальная температура:</h3>
                        <p>{tempRound(tempMax)}°C</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Восход в:</h3>
                        <p>{timeConverter(sunrise, timezone)}</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Закат в:</h3>
                        <p>{timeConverter(sunset, timezone)}</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Видимость:</h3>
                        <p>{visibility}м</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Направление ветра:</h3>
                        <p>{windDeg}°</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Скорость ветра:</h3>
                        <p>{currentWindSpeed}м/с</p>
                    </div>
                </div>
            </div>
            <div className="link-to-home">
                <Link className="link-to-home-title" to='/'>Перейти на домашнюю страницу</Link>
            </div> 
        </div>
    )
}

export default MoreInformationPage;
