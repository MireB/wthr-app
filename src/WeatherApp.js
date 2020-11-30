import React from "react";
import axios from "axios";

import MainWeather from "./MainWeather";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <MainWeather />
      <Forecast />
    </div>
  );
}
