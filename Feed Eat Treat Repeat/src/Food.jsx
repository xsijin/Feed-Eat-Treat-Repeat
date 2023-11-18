import Meal from "./Meal";
import MealEntry from "./MealEntry";
import Ingredient from "./Ingredient";

const foodList = ["Salmon", "Porridge", "Kale"];

export default function Food() {
  return (
    <>
      <h1>Date</h1>

      <h2>
        <Meal />
      </h2>

      <Ingredient foodList={foodList} />

      <MealEntry />
    </>
  );
}