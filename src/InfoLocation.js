// 12) Create the InfoLocation component and its css. Return the structure with the icon and the main temp.
// 13) Add the props.
// 14) Import DateLocation component.
// 16) Import MainIcon component.

import React from "react";
import MainIcon from "./MainIcon";
import DateLocation from "./DateLocation";

import "./InfoLocation.css";

export default function InfoLocation(props) {
  return (
    <div className="InfoLocation">
      <h1>{props.data.city}</h1>
      <h5>
        <DateLocation />
      </h5>
      <h6 className="text-capitalize">Description</h6>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="icon">
              <MainIcon code={props.data.icon} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="temp">7</div>
        </div>
        <div className="elements">
          <div className="row">
            <div className="col-12">
              <p>
                {" "}
                <strong>Max:</strong> <strong>Min:</strong>{" "}
                <strong>Humidity:</strong> <strong>Wind:</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
