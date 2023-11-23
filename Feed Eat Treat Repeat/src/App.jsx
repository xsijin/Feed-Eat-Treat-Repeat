import { useState, useEffect } from "react";
import { fetchEntries } from "./Airtable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ViewFood from "./ViewFood";
import ViewNutrition from "./ViewNutrition";
import UpdateFoodItem from "./UpdateFoodItem";
import DeleteFoodItem from "./DeleteFoodItem";

function App() {
  const [NutritionData, setNutritionData] = useState("");
  const [NutritionTitle, setNutritionTitle] = useState("");
  const [entries, setEntries] = useState([]);
  const [foodItemIdMap, setFoodItemIdMap] = useState({});
  const [foodList, setFoodList] = useState([
    "Greek Yogurt",
    "Almonds",
    "Carrot Sticks",
  ]);

  const clearNutrition = () => {
    setNutritionTitle("");
    // Additional clearing steps if needed
  };

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
    console.log("App - handleSubmit - food:", title);
    setNutritionTitle(title);
  };

  function addFoodItem(newFoodItem) {
    setFoodList([...foodList, newFoodItem]);
  }

  useEffect(() => {
    fetchEntries()
    .then((data) => {
      const extractedEntries = data.records.map((record) => record.fields["Food"]);
      setEntries(extractedEntries);

      const newFoodItemIdMap = {};
      data.records.forEach((record) => {
        const id = record.id;
        const foodItem = record.fields["Food"];
        newFoodItemIdMap[foodItem] = id;
      });

      setFoodItemIdMap(newFoodItemIdMap); // Update the foodItemIdMap state
    })
      .catch((error) => {
        console.error("Error fetching entries:", error);
      });
  }, []);


  return (
      <Routes>
        <Route path="/" element={
          <div className="container">
            <div className="item">
              <ViewFood
                handleSubmit={handleSubmit}
                entries={entries}
                setEntries={setEntries}
                addFoodItem={addFoodItem}
                foodItemIdMap={foodItemIdMap}
              />
            </div>
            <div className="item2">
              {NutritionData.calories && NutritionData.totalWeight ? (
                <ViewNutrition
                  nutrition={NutritionData}
                  clearNutrition={clearNutrition}
                />
              ) : (
                <div className="unavail">
                  No Nutrition Information available.
                  <br />
                  <br />
                  <div className="small">
                    Please click on the information bubble{" "}
                    <button className="info">i</button> to view nutrition
                    information.
                    <br />
                    <br />
                    <ul>
                      Possible reasons for unavailability:
                      <li className="intro">No food item selected.</li>
                      <li className="intro">
                        Food item is not specific enough. Instead of "juice",
                        try entering "apple juice".
                      </li>
                      <li className="intro">
                        No data available for food item.
                      </li>
                    </ul>
                    <br />
                    Nutrition Analysis API powered by{" "}
                    <a href="https://www.edamam.com/">Edamam</a>.
                  </div>
                </div>
              )}
            </div>
          </div>
        } />

        {/* Other Routes */}
        <Route path="/update/:id" element={<UpdateFoodItem />} />
        <Route path="/delete/:id" element={<DeleteFoodItem />} />
      </Routes>
  );
}

export default App;
