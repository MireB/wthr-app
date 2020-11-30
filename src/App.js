import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import WeatherApp from "./WeatherApp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherApp />
        <footer>
          {" "}
          Open source code by{" "}
          <a
            href="https://github.com/MireB/wthr-app"
            target="_blank"
            rel="noreferrer"
          >
            Mire Bosch.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
