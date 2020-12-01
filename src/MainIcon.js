// 15) Create MainIcon and its css.
// 17) Install and import icons.
// 18) Mapping the different icons. (icon Url/ API)

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./MainIcon.css";

export default function MainIcon(props) {
  const Mapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <div className="MainIcon">
      <ReactAnimatedWeather
        icon={Mapping[props.code]}
        color="white"
        size={50}
        animate={true}
      />
    </div>
  );
}
