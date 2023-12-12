import React from "react";
import "./Weather.css";

export default function Weather () {
    return(
        <div className="Weather">
            <form>
            <input type="search" placeholder="Enter a city..." autoFocus="on" />
            <input type="submit" value="search" className="bg-success bg-gradient submit-button" />
            </form>

            <h1 className="mt-3">Tokyo</h1>
            <h5>Tuesday 11:52</h5>
            <ul className="mainWeather">
               <li> <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                alt="mostly sunny"/>
                </li>
               <li className="temp fs-1">
                22°C</li> 
                <li>Mostly sunny</li>
                
            </ul>

            <div className="row">
                <div className="col-4 text-end">
                    <p>feels like 22°C</p>
                </div>
                <div className="col-4">
                    <p>Wind:8km/h</p>
                </div>
                <div className="col-4 text-start">
                    <p>Humidity:15%</p>
                </div>
            </div>

        </div>
    )
}