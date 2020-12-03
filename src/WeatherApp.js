// 4)Create the WeatherApp component and its css.
// 5)Install and import axios.
// 6)Create the InfoLocation and Forecast components and import them.
// 7) Create a function to add the API.
// 8) Use the useState and create const for the city.
// 9) Create a function to submit the search. Add on- in the form.
// 10)Create a function to change the city. Add on- in the searching tool.
// 11)Need to create a const for the data of the location and its function, props in Weather.
// new Date(response.data.dt * 1000) ? --> console log to find it. I created a varible.
// 28) Conditional rendering

import React, { useState } from "react";
import axios from "axios";

import InfoLocation from "./InfoLocation";
import Forecast from "./Forecast";

import "./WeatherApp.css";

export default function WeatherApp(props) {
  const [locationData, setlocationData] = useState({ true: false });
  const [city, setCity] = useState(props.city);

  function Response(response) {
    setlocationData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function SubmitCity(event) {
    event.preventDefault();
    searchCity();
  }

  function ChangeCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    const apiKey = "9430278bf6c3175ec4b37df9d1ac0836";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Response);
  }

  if (locationData.ready) {
    return (
      <div className="WeatherApp">
        <form onSubmit={SubmitCity}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={ChangeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <InfoLocation data={locationData} />
        <Forecast city={locationData.city} />
      </div>
    );
  } else {
    searchCity();
    return (
      <div className="Loading">
        <span>Loading...</span>
      </div>
    );
  }
}
