import React from "react";
import "./CovidCard.css";
import CountUp from "react-countup";

function CovidCard({ situation, cases, style }) {
  return (
    <div className="covid-card" style={style}>
      <h2>{situation}</h2>
      <h1>
        <CountUp end={cases} separator=" " start={0} duration={2.75} />
      </h1>
    </div>
  );
}

export default CovidCard;
