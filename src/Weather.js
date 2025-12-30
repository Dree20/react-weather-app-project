import React from "react";
import "./Weather.css";

export default function Weather() {
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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Toronto</h1>
      <ul>
        <li>Tuesday 12:32</li>
        <li>Light snow showers</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/flurries_light.svg"
            alt="light snow showers"
          />
          -6°C
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 35% </li>
            <li> Humidity: 71% </li>
            <li>Wind: 29 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
