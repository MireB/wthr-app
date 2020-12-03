// 29) Create Forecast component and its css.
// 30) Create the API for the forecast
// 31) Import axios. Call axios.
// 32) Create an State + const ->load the API call
// 33) Conditional rendering.
// 34) Create const for forecast
// 37) Duplicate the component. (I had to create col because they were disposed in block and the css wasn't work)
// 38) Change the conditional rendereing to have the forecast if the city is different.

import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function forecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-3">
            <ForecastPreview data={forecast.list[0]} />
          </div>
          <div className="col-3">
            <ForecastPreview data={forecast.list[1]} />
          </div>
          <div className="col-3">
            <ForecastPreview data={forecast.list[2]} />
          </div>
          <div className="col-3">
            <ForecastPreview data={forecast.list[3]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "9430278bf6c3175ec4b37df9d1ac0836";
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(forecastResponse);

    return props.city;
  }
}
