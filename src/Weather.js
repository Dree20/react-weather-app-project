import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherdata, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherdata.ready) {
    return (
      <div className="Weather">
        {" "}
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{props.city}</h1>
        <ul>
          <li>
            {" "}
            <FormattedDate date={weatherdata.date} />{" "}
          </li>
          <li className="text-capitalize">{weatherdata.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherdata.iconUrl} alt={weatherdata.description} />
            <span className="temperature">
              {" "}
              {Math.round(weatherdata.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li> Precipitation: 35% </li>
              <li> Humidity: {weatherdata.humidity}% </li>
              <li>Wind: {Math.round(weatherdata.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "babdtd562ab541fbc49o01aca733b4ff";
    let apirUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apirUrl).then(showWeather);

    return "Loading...";
  }
}
