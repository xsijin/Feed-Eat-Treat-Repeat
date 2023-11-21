import { useState, useEffect } from "react";

export default function FoodItem({ foodItem, handleSubmit }) {
    const [NutritionTitle, setNutritionTitle] = useState("");

    const handleClick = (clickedItem) => {
        handleSubmit(clickedItem);
        setNutritionTitle(clickedItem);
      };

    return (
      <>
     <li className="fooditem">
      {foodItem} <button
        className="info"
        value={foodItem}
        onClick={() => handleClick(foodItem)}
      >
        i
      </button>
    </li>
</>
    );
}