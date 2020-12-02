// 12) Create the InfoLocation component and its css. Return the structure with the icon and the main temp.
// 13) Add the props.
// 14) Import DateLocation component.
// 16) Import MainIcon component.
// 21) Import MainTemp component.

import React from "react";
import MainTemp from "./MainTemp";
import MainIcon from "./MainIcon";
import DateLocation from "./DateLocation";

import "./InfoLocation.css";

export default function InfoLocation(props) {
  return (
    <div className="InfoLocation">
      <h1>{props.data.city}</h1>
      <h5>
        <DateLocation date={props.data.date} />
      </h5>
      <h6 className="text-capitalize">{props.data.description}</h6>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="icon">
              <MainIcon code={props.data.icon} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="temp">
            <MainTemp celsius={props.data.temperature} />
          </div>
        </div>
        <div className="elements">
          <div className="row">
            <div className="col-12">
              <p>
                {" "}
                <strong>Humidity:</strong>
                {props.data.humidity}% <strong>Wind:</strong>
                {props.data.wind}km/h{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
