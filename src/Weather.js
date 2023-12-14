import React, { useState } from "react";
import axios from "axios";
import  { Puff } from "react-loader-spinner";
import "./Weather.css";

export default function Weather () {
    const [temperatureData, setTemperatureData] = useState({ ready: false });

function fetchTemperature(response) {

    setTemperatureData({
        ready: true,
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        iconUrl: response.data.condition.icon_url, 
        feelLike: response.data.temperature.feels_like,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        city: response.data.city,});
    
}
 if (temperatureData.ready) {
     return(
        <div className="Weather">
            <form>
            <input type="search" placeholder="Enter a city..." autoFocus="on" />
            <input type="submit" value="search" className="bg-success bg-gradient submit-button" />
            </form>

            <h1 className="mt-3">{temperatureData.city}</h1>
            <h5>Tuesday 11:52</h5>
            <ul className="mainWeather">
               <li> <img src={temperatureData.iconUrl} 
                alt="mostly sunny"/>
                </li>
               <li className="temp" >
                <span className="fs-1">{Math.round(temperatureData.temperature)}</span><span className="units font-weight-bold">°C</span></li> 
                <li className="text-capitalize">{temperatureData.description}</li>
                
            </ul>

            <div className="row">
                <div className="col-4 text-end">
                    <p>Feels like {Math.round(temperatureData.feelLike)}°C</p>
                </div>
                <div className="col-4">
                    <p>Wind:{temperatureData.wind}km/h</p>
                </div>
                <div className="col-4 text-start">
                    <p>Humidity:{temperatureData.humidity}%</p>
                </div>
            </div>

        </div>
    )
 }
 else {
    const apiKey = "00b38325ed040e371254ctd7ac1o8f0a"
    let city = "Tokyo"
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(url).then(fetchTemperature)
    return (<div className="loading">
    <Puff
  height="80"
  width="80"
  radius={1}
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}/>
</div>
);
   }
}