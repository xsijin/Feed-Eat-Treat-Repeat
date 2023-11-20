import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
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
          value={NutritionTitle}
          onChange={handleChange}
          placeholder="Enter food"
          size="sm"
          focusBorderColor='pink.400'
          style={{ width: '200px' }}
          variant='flushed'
        />

        <Button
          type="submit"
          colorScheme="pink"
          size="xs"
        >
          Add Breakfast
        </Button>
      </form>
    </div>
  );
  }
