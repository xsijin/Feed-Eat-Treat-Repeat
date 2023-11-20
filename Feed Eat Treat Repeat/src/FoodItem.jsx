import { useState, useEffect } from "react";

export default function FoodItem({ mealType, date, foodItem, handleSubmit }) {
    const [NutritionTitle, setNutritionTitle] = useState("");

    const handleClick = (clickedItem) => {
        console.log("Form - handleSubmit - NutritionTitle", NutritionTitle);
        handleSubmit(clickedItem);
        setNutritionTitle(clickedItem);
      };

    return (
      <>
      {foodItem.map((item, index) => (
        <li className="fooditem" key={index}>{item} <button
        className="info"
        value={item}
        onClick={() => handleClick(item)}
      >
        i
      </button></li>
      ))}
</>
    );
}