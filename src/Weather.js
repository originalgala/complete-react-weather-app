import React, { useState } from "react";
import WeatherData from "./WeatherData";
import DailyForecast from "./DailyForecast";
import axios from "axios";
import  { Puff } from "react-loader-spinner";
import "./Weather.css";

export default function Weather (props) {
    const [temperatureData, setTemperatureData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

function fetchTemperature(response) {

    setTemperatureData({
        ready: true,
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        iconUrl: response.data.condition.icon_url, 
        feelLike: response.data.temperature.feels_like,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        city: response.data.city});
    
}


function handleSubmit(event) {
    event.preventDefault();
    search();
}

function changeCity(event) {
setCity(event.target.value); 
}

function search() {
 const apiKey = "00b38325ed040e371254ctd7ac1o8f0a"
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(url).then(fetchTemperature)
}

 if (temperatureData.ready) {
     return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Enter a city..." autoFocus="on" onChange={changeCity} />
            <input type="submit" value="search" className="bg-success bg-gradient submit-button" />
            </form>

            <WeatherData data={temperatureData}/>
            <DailyForecast data={temperatureData}/>
            </div>
            );
 }
 else {
   search ();
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