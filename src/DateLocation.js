// 15) Create DateLocation component and its css. Return de date.
// 16) Create date variables. Add props. Conditional rendering.

import React from "react";

import "./DateLocation.css";

export default function DateLocation(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="DateLocation">
      {day}, {hours}:{minutes}
    </div>
  );
}
