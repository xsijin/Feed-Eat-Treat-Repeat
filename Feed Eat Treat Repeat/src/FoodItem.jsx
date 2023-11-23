import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function FoodItem({ foodItem, handleSubmit, foodItemIdMap }) {
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
      </button> {/* Link to the update route with the food item ID */}
              <Link to={`/update/${foodItemIdMap[foodItem]}`}>Edit</Link>
    </li>
</>
    );
}