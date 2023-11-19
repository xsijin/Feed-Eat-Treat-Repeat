import React, { useState, useEffect } from "react";

import MealEntry from "./MealEntry";
import FoodItem from "./FoodItem";
import "./ViewFood.css";

const foodList = ["Salmon", "Porridge", "Kale"];

export default function ViewFood({ handleSubmit }) {
  return (
    <>
      <h2>25 Nov 2023</h2>
  <div className="flexbox">
      <h3 className="flexitem">
        Breakfast
      </h3>
      <FoodItem foodList={foodList} />
      <MealEntry handleSubmit={handleSubmit}/>

      <h3 className="flexitem">
        Lunch
      </h3>
      <FoodItem foodList={foodList} />
      <MealEntry handleSubmit={handleSubmit}/>

      <h3 className="flexitem">
        Dinner
      </h3>
      <FoodItem foodList={foodList} />
      <MealEntry handleSubmit={handleSubmit}/>

      <h3 className="flexitem">
        Snack
      </h3>


</div>
      <FoodItem foodList={foodList} />
      <MealEntry handleSubmit={handleSubmit}/>
    </>
  );
}
