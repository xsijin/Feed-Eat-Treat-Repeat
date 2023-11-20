

export default function FoodItem({ mealType, date, foodItem }) {
    // Application logic, etc. goes here
    return (
      <>
      {foodItem.map((item, index) => (
        <li className="fooditem" key={index}>{item} <button
        className="info"
        type="submit"
        onClick={(e) => handleAddMeal(e, "breakfast")}
      >
        i
      </button></li>
      ))}
</>
    );
}