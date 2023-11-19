import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

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
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          size="xs"
        />
        <Input
          value={enterMeal}
          onChange={(evt) => setEnterMeal(evt.target.value)}
          placeholder="Enter food"
          size="xs"
          variant="outline"
        />

        <Button
          type="submit"
          onClick={(e) => handleAddMeal(e, "breakfast")}
          colorScheme="pink"
          size="xs"
        >
          Add Breakfast
        </Button>
      </form>
    </div>
  );
  }
