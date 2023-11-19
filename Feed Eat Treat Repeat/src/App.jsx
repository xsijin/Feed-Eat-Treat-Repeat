import { useState, useEffect } from "react";
import "./App.css";
import ViewFood from "./ViewFood";
import ViewNutrition from "./ViewNutrition";


function App() {
  const [NutritionData, setNutritionData] = useState("");
  const [NutritionTitle, setNutritionTitle] = useState("100g salmon");

  useEffect(() => {
    const NutritionUrl = `https://api.edamam.com/api/nutrition-data?app_id=3791ca98&app_key=99274120c12f12224b802f6c3efb5407&nutrition-type=logging&ingr=100g%20${NutritionTitle}`;

    const makeApiCall = () => {
      fetch(NutritionUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("NutritionData", data);
          setNutritionData(data);
        });
    };
    makeApiCall();
  }, [NutritionTitle]);

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);
    setNutritionTitle(title);
  };

  return (
    <div className="container">
      <div className="item">
        <ViewFood handleSubmit={handleSubmit} />
      </div>
      <div className="item2">
         
        {NutritionData.calories && NutritionData.totalWeight ? (<ViewNutrition nutrition={NutritionData} />) : <div className="unavail">No Nutrition Information available.</div>}
      
    </div></div>
  );
}

export default App;

// airtable
// 3rd party API
