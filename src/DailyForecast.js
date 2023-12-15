import React from "react";
import "./DailyForecast.css";


export default function DailyForecast (props) {
    return (
        <div className="forecast mt-3">
            <p className="forecast-heading text-start">Weekly Forecast</p>
           <hr className="line"/>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>Mon</li>
                        <li> <img src={props.data.iconUrl} alt=""></img></li>
                        <li>
                            <span className="minimum">12°C</span>
                            |
                            <span className="maximun">22°C</span>
                            </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}