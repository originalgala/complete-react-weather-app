import React from "react";
import ReadableDate from "./ReadableDate";

export default function WeatherData(props) {
    return (<div>
        <h1 className="mt-3">{props.data.city}</h1>
            <h5>
                <ReadableDate date={props.data.date} />
                </h5>
            <ul className="mainWeather">
               <li> <img src={props.data.iconUrl} 
                alt="mostly sunny"/>
                </li>
               <li className="temp" >
                <span className="fs-1">{Math.round(props.data.temperature)}</span>
                <span className="units">°C</span>
                </li> 
                <li className="text-capitalize">{props.data.description}</li>
                
            </ul>

            <div className="row">
                <div className="col-4 text-end">
                    <p>Feels like {Math.round(props.data.feelLike)}°C</p>
                </div>
                <div className="col-4">
                    <p>Wind:{props.data.wind}km/h</p>
                </div>
                <div className="col-4 text-start">
                    <p>Humidity:{props.data.humidity}%</p>
                </div>
            </div>
    
    </div>);
}