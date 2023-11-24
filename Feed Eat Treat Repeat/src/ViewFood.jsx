import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

import MealEntry from "./MealEntry";
import FoodItem from "./FoodItem";
import "./ViewFood.css";

export default function ViewFood({ handleSubmit, entries, setEntries, foodItemIdMap, updateEntries, updateID }) {
  return (
    <>
      <h2>Feed Eat Treat Repeat</h2> 
      {/* <Input
          placeholder="Select Date and Time"
          type="date"
          size="xs"
          style={{ width: '110px' }}
          focusBorderColor='pink.400'
        /> */}
      <div className="flexbox">
      
        <h3 className="flexitem">A Nutritional Diary</h3>
        <ul>
          {entries.map((foodItem, index) => (
            <FoodItem
              key={index}
              foodItem={foodItem} 
              handleSubmit={handleSubmit}
              foodItemIdMap={foodItemIdMap}
              updateEntries={updateEntries} 
              updateID={updateID}
            />
          ))}
        </ul>
        <MealEntry handleSubmit={handleSubmit} setEntries={setEntries} updateID={updateID}/>
      </div>
    </>
  );
}
