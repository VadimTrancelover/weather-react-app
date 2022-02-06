import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MoreInformationPage() {

    const weather = useSelector(({search}) => search.weatherData);


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

    const currentWindSpeed = Math.round((windSpeed)*10)/10;


    // function timeConverter(UNIX_timestamp){
    //     let a = new Date(UNIX_timestamp * 1000);
    //     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //     let year = a.getFullYear();
    //     let month = months[a.getMonth()];
    //     let date = a.getDate();
    //     let hour = a.getHours();
    //     let min = a.getMinutes(); 
    //     let sec = a.getSeconds();

    //     function mins(int) {
    //         if (min.length < 2) {
    //             min = '0' + int
    //            } else {
    //                min = int
    //            }
    //         return min;   
    //     }
        
        
    //     //const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    //     let timeHoursMin = hour + ':' + mins(min) + ':' + sec;
    //     console.log(min.length)
    //     return timeHoursMin;
    //   }
    
    // React.useEffect(() => {
    //     console.log(timeConverter(sunrise))
    // },[])

    const tempRound = (temp) => {
        return Math.round((temp)*10)/10
    }


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
                        <p>{humidity}</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Давление:</h3>
                        <p>{pressure}</p>
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
                        <p>{sunrise}</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Закат в:</h3>
                        <p>{sunset}</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Временной пояс:</h3>
                        <p>100 м/с</p>
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
