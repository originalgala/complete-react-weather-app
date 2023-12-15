import React from "react";

export default function WeatherForecastDay (props) {

    function showDay() {
        let date = new Date(props.forecastData.time * 1000);
        let day = date.getDay(); 
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur","Fri","Sat"];

        return days[day];
    }
    return (
        <div>
            <ul>
                        <li>{showDay()}</li>
                        <li> <img src={props.forecastData.condition.icon_url} alt=""></img></li>
                        <li>
                            <span className="minimum">{Math.round(props.forecastData.temperature.minimum)}°</span>
                            {" "} | {" "}
                            <span className="maximun">{Math.round(props.forecastData.temperature.maximum)}°</span>
                            </li>
                    </ul>
        </div>
    );
}