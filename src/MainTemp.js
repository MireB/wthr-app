// 20) Create MainTemp component and its css.
// 22) Add the props.
// 23) Create a State + const
// 24) Conditional rendering
// 25) Add onClick in the <a>.
// 26) Create a function to convert to fahrenheit
// 27) Create the functions to display the units.

import React, { useState } from "react";

import "./MainTemp.css";

export default function MainTemp(props) {
  const [units, setUnits] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function Fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div className="MainTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/">˚C</a> |{" "}
          <a href="/" onClick={displayFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="MainTemp">
        <span className="temperature">{Math.round(Fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={displayCelsius}>
            ˚C
          </a>{" "}
          | <a href="/">˚F</a>
        </span>
      </div>
    );
  }
}
