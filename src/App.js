// 1) Clean the Create App Template - Install and import bootstrap-->container.
// 2) Add the Github link in the footer.
// 3) Create the WeatherApp component and import it.

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherApp from "./WeatherApp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <WeatherApp city="Barcelona" />
          </div>
          <div className="col-6">
            <WeatherApp city="Stockholm" />
          </div>
        </div>

        <footer>
          {" "}
          This project was coded by {""}
          <a
            href="https://www.linkedin.com/in/mireiabosch"
            target="_blank"
            rel="noreferrer"
          >
            Mire Bosch {""}
          </a>
          and is open-sourced on{" "}
          <a
            href="https://github.com/MireB/wthr-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
