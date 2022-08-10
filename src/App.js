import Gauge from "./Guage";
// import "./styles.css";
import React from "react";

export default function App() {
  return (
    <Gauge
      chartWidth={"140px"}
      chartHeight={"140px"}
      bgColor="#DC3232"
      id="gauge2"
    />
  );
}
