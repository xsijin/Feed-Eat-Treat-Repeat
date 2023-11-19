import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export default function MealEntry(props) {
    const [NutritionTitle, setNutritionTitle] = useState("");

    const handleSubmit = (e) => {
        console.log("Form - handleSubmit - NutritionTitle", NutritionTitle);
        e.preventDefault();
        props.handleSubmit(NutritionTitle);
        setNutritionTitle("");
      };
    
      const handleChange = (e) => {
        console.log("handleChange clicked");
        const title = e.target.value;
        setNutritionTitle(title);
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          size="xs"
        />
        <Input
          value={NutritionTitle}
          onChange={handleChange}
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
