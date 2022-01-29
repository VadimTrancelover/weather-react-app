import React from 'react';
import { Link } from 'react-router-dom';

function MoreInformationPage() {
    return (
        <div className="wrapper-detail-information">
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
                    <div className="information-parametr">
                        <h3>Облачность:</h3> 
                        <p>99%</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Ощущается как:</h3>
                        <p>-8°c</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Влажность:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Давление:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Минимальная температура:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Максимальная температура:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Восход в:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Закат в:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Временной пояс:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Видимость:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Направление ветра:</h3>
                        <p>100 м/с</p>
                    </div>
                    <div className="information-parametr">
                        <h3>Скорость ветра:</h3>
                        <p>100 м/с</p>
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
