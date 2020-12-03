// 35) Create ForecastPreview comp.
// 36) Create functions for hour and temp

import React from "react";

import "./ForecastPreview.css";
import MainIcon from "./MainIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temp() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}˚C`;
  }
  return (
    <div className="ForecastPreview col">
      {hours()}
      <MainIcon code={props.data.weather[0].icon} />
      {temp()}
    </div>
  );
}
