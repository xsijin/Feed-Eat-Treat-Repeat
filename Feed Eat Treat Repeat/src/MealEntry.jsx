import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export default function MealEntry(props) {
    const [NutritionTitle, setNutritionTitle] = useState("");
    const [newFoodItem, setNewFoodItem] = useState("")

    const handleAddFood = (e) => {
        console.log("Form - handleSubmit - newFoodItem", newFoodItem);
        e.preventDefault();
        props.addFoodItem(newFoodItem);
        setNewFoodItem("");
      };
    
      const handleChange = (e) => {
        console.log("handleChange clicked");
        const foodInput = e.target.value;
        setNewFoodItem(foodInput);
      };

  return (
    <div>
      <form onSubmit={handleAddFood}>
        <Input
          value={newFoodItem}
          onChange={handleChange}
          placeholder="Enter food"
          size="sm"
          focusBorderColor='pink.400'
          style={{ width: '250px' }}
          variant='flushed'
          required
  pattern=".{2,}"
        />

        <Button
          type="submit"
          colorScheme="pink"
          size="xs"
        >
          Add
        </Button>
      </form>
    </div>
  );
  }
