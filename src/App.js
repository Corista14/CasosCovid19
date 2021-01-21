import React, { useEffect, useState } from "react";
import "./App.css";
import CovidCard from "./components/CovidCard/CovidCard";
import img from "./images/image.svg";

const API_URL = "https://disease.sh/v3/covid-19/countries/portugal";

function App() {
  const [cases, setCases] = useState();

  useEffect(() => {
    async function fetchCases() {
      const data = await (await fetch(API_URL)).json();
      setCases(data);
    }
    fetchCases();
  }, []);

  return (
    <div className="App">
      <h1 className="title">Casos Covid-19</h1>
      <h5 className="subtitle">Portugal</h5>

      <div className="cases-container">
        <img className="image" src={img} alt="Covid-19 Vaccine" />
        <div className="card-container">
          {cases ? (
            <>
              <CovidCard
                style={{ backgroundColor: "#C84444" }}
                situation="Mortos d'hoje"
                cases={cases.todayDeaths}
              />
              <CovidCard
                situation="Casos d'hoje"
                style={{ backgroundColor: "#C86A35" }}
                cases={cases.todayCases}
              />
              <CovidCard situation="Ativos" cases={cases.active} />
              <CovidCard
                situation="Recuperados"
                style={{ backgroundColor: "#3F7A41" }}
                cases={cases.recovered}
              />
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
