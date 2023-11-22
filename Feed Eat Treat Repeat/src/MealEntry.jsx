import { useState, useEffect } from "react";
import { fetchEntries } from './Airtable';
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export default function MealEntry(props) {
    const [NutritionTitle, setNutritionTitle] = useState("");
    const [newFoodItem, setNewFoodItem] = useState("")

    const handleAddFood = (e) => {
        console.log("Form - handleSubmit - newFoodItem", newFoodItem);
        e.preventDefault();
        fetch('https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/Records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer patSPU1OYQlMZDonM.94247f8b517d10f9a7b08f0453a524ff90ac510b578338ad088f2096ff065db8',
      },
      body: JSON.stringify({
        fields: {
          'Food': newFoodItem,
        },
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add food item');
        }
        return response.json();
      })
      .then(data => {
        // Update state or trigger a refetch of data from Airtable
        // For example, you might call a function to refetch entries
        fetchEntries()
          .then(data => {
            // Update your state with the latest data
            const extractedEntries = data.records.map(record => record.fields['Food']);
            props.setEntries(extractedEntries);
          })
          .catch(error => {
            console.error('Error fetching entries:', error);
          });
      })
      .catch(error => {
        console.error('Error adding food item:', error);
      });

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
