import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

import MealEntry from "./MealEntry";
import FoodItem from "./FoodItem";
import "./ViewFood.css";

export default function ViewFood({ handleSubmit, entries, addFoodItem, setEntries }) {
  return (
    <>
      <h2>25 Nov 2023</h2> 
      <Input
          placeholder="Select Date and Time"
          type="date"
          size="xs"
          style={{ width: '110px' }}
          focusBorderColor='pink.400'
        />
      <div className="flexbox">
      
        <h3 className="flexitem">Feed Eat Treat Repeat</h3>
        <ul>
          {entries.map((foodItem, index) => (
            <FoodItem
              key={index}
              foodItem={foodItem} // Pass the whole foodItem array to FoodItem
              handleSubmit={handleSubmit}
            />
          ))}
        </ul>
        <MealEntry handleSubmit={handleSubmit} addFoodItem={addFoodItem} setEntries={setEntries}/>
      </div>
    </>
  );
}
