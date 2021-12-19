import React from 'react';
import { Link } from 'react-router-dom';

function MoreInformationPage() {
    return (
        <div className="wrapper">
            <div className="detail-information">
                <div className="left-column_information">
                    <div className="weather-icon">
                        <img alt="weather" src={`http://openweathermap.org/img/wn/10d@4x.png`}/>
                    </div>
                    <div className="detail-temperature">
                        <h1 className="temperature">26°c</h1>
                    </div>
                </div>
                <div className="right-column_information">
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                    <p>скорость ветра: 100 м/с</p>
                </div>
            </div>
            <Link to='/'>Перейти на домашнюю страницу</Link>
        </div>
    )
}

export default MoreInformationPage;
