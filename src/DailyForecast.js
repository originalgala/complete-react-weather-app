import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./DailyForecast.css";


export default function DailyForecast (props) {
let [loaded, setLoaded] = useState(false);
let [forecastDaily, setForecastDaily] = useState(null)

    function handleResponse (response) {
        console.log(response.data)
        setForecastDaily(response.data.daily);
        setLoaded(true);
    }
    


    if (loaded){
return (
        <div className="forecast mt-3">
            <p className="forecast-heading text-start">Weekly Forecast</p>
           <hr className="line"/>
            <div className="row">
                <div className="col">
                    <WeatherForecastDay forecastData={forecastDaily[0]}/>
                    
                </div>
                
            </div>
        </div>
    );
 
    }
    else {
     const apiKey = "00b38325ed040e371254ctd7ac1o8f0a"
    let city = props.data.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`
    axios.get(url).then(handleResponse)
    return null
}
}