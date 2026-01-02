import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Dree20?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Dreanna
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Dree20/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://react-weather-app-project-dree.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
