import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

import MealEntry from "./MealEntry";
import FoodItem from "./FoodItem";
import "./ViewFood.css";

const foodList = [
  {
    mealType: "Breakfast",
    date: "2023-11-25",
    foodItem: ["Oatmeal", "Banana", "Eggs"],
  },
  {
    mealType: "Lunch",
    date: "2023-11-25",
    foodItem: ["Salad", "Chicken Sandwich", "Apple"],
  },
  {
    mealType: "Dinner",
    date: "2023-11-25",
    foodItem: ["Salmon", "Brown Rice", "Broccoli"],
  },
  {
    mealType: "Snack",
    date: "2023-11-25",
    foodItem: ["Greek Yogurt", "Almonds", "Carrot Sticks"],
  },
];

export default function ViewFood({ handleSubmit }) {
  const breakfastItems = foodList.filter((item) => item.mealType === "Breakfast");
  const lunchItems = foodList.filter((item) => item.mealType === "Lunch");
  const dinnerItems = foodList.filter((item) => item.mealType === "Dinner");
  const snackItems = foodList.filter((item) => item.mealType === "Snack");

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
        <h3 className="flexitem">Breakfast</h3>
        <ul>
          {breakfastItems.map((food, index) => (
            <FoodItem
              key={index}
              mealType={food.mealtype}
              date={food.date}
              foodItem={food.foodItem}
            />
          ))}
        </ul>
        <MealEntry handleSubmit={handleSubmit} />

        <h3 className="flexitem">Lunch</h3>
        <ul>
          {lunchItems.map((food, index) => (
            <FoodItem
              key={index}
              mealType={food.mealtype}
              date={food.date}
              foodItem={food.foodItem}
            />
          ))}
        </ul>
        <MealEntry handleSubmit={handleSubmit} />

        <h3 className="flexitem">Dinner</h3>
        <ul>
          {dinnerItems.map((food, index) => (
            <FoodItem
              key={index}
              mealType={food.mealtype}
              date={food.date}
              foodItem={food.foodItem}
            />
          ))}
        </ul>
        <MealEntry handleSubmit={handleSubmit} />

        <h3 className="flexitem">Snack</h3>
      </div>
      <ul>
          {snackItems.map((food, index) => (
            <FoodItem
              key={index}
              mealType={food.mealtype}
              date={food.date}
              foodItem={food.foodItem}
            />
          ))}
        </ul>
      <MealEntry handleSubmit={handleSubmit} />
    </>
  );
}
