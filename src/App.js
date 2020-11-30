import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        Hello!
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
