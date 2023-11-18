import { useState } from "react";

export default function MealEntry() {
    const [enterMeal, setEnterMeal] = useState("");

    function handleAddMeal() {
        e.preventDefault();
        if (mealType === "breakfast") {
          setBreakfast(enterMeal);
        } else if (mealType === "lunch") {
          setLunch(enterMeal);
        } else if (mealType === "dinner") {
          setDinner(enterMeal);
        } else if (mealType === "snack") {
            setSnack(enterMeal);
        }
        setEnterMeal("");
      }

    return (
        <div>
        <form>
          <input
            value={enterMeal}
            onChange={(evt) => setEnterMeal(evt.target.value)}
            placeholder="Add your food item here."
          />  for
          <br/>
          <button type="submit" onClick={(e) => handleAddMeal(e, "breakfast")}>
            Breakfast
          </button>
          <button type="submit" onClick={(e) => handleAddMeal(e, "lunch")}>
            Lunch
          </button>
          <button type="submit" onClick={(e) => handleAddMeal(e, "dinner")}>
            Dinner
          </button>
          <button type="submit" onClick={(e) => handleAddMeal(e, "snack")}>
            Snack
          </button>
        </form>

      </div>
    );
}

