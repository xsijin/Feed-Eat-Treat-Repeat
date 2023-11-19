import { useState } from "react";
import "./App.css";
import ViewFood from "./ViewFood";
import ViewNutrition from "./ViewNutrition";



function App() {




  return (
    <div className="container">
      <div className="item">
        <ViewFood />
      </div>
      <div className="item">
        <ViewNutrition />
    </div></div>
  );
}

export default App;

// airtable
// 3rd party API
