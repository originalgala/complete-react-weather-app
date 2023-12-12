import React from "react";
import "./Weather.css";

export default function Weather () {
    return(
        <div className="Weather">
            
            <input type="search" placeholder="Enter a city" />
            <input type="submit" value="search" className="btn btn-success" />
            <h1>Tokyo</h1>
            <h5>Tuesday 11:52</h5>
            <ul className="mainWeather">
                <li> <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="mostly sunny"/></li>
                <li>Mostly sunny</li>
                <li>22°C</li>
            </ul>

            <div className="row">
                <div className="col-4">
                    <p>feels like 22°C</p>
                </div>
                <div className="col-4">
                    <p>Wind:8km/h</p>
                </div>
                <div className="col-4">
                    <p>Humidity:15%</p>
                </div>
            </div>

        </div>
    )
}