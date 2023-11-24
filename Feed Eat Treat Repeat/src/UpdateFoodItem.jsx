import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEntries } from "./Airtable";
import { Input } from "@chakra-ui/react";

function UpdateFoodItem({ updateEntries, updateID }) {
    const apiKey = import.meta.env.VITE_MY_KEY;
    const { id } = useParams(); // Get the ID from the URL parameter
  const navigate = useNavigate();
  const [foodItem, setFoodItem] = useState({});

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/tbl7xnuDoU34SL2df/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch food item');
        }
        return response.json();
      })
      .then(data => {
        setFoodItem(data.fields); 
      })
      .catch(error => {
        console.error('Error fetching food item:', error);
      });
  }, [id]);


  
  const handleSubmit = (e) => {
    e.preventDefault();

      // Payload to ensure data format consistency
  const payload = {
    fields: {
      Food: foodItem.Food 
    }
  };
  
  // Perform the update operation using the fetched foodItem details
  fetch(`https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/tbl7xnuDoU34SL2df/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update food item');
    }

     // If the update is successful, navigate back to the main page ("/")
     return response.json();
    })
    .then(updatedData => {
        if (updatedData.fields && updatedData.fields.Food) {
          // Update entries & ID after successful update to re-render entries with new data
          fetchEntries()
            .then(data => {
              const extractedEntries = data.records.map(record => record.fields["Food"]);
              updateEntries(extractedEntries);
              updateID(data);
            })
            .catch(error => {
              console.error('Error fetching updated entries:', error);
            })
            .finally(() => {
              // Navigate back to the main page regardless of success or error in fetching updated entries
              navigate('/');
            });
        }
      })
      .catch(error => {
        console.error('Error updating food item:', error);
      });
};

  return (
    <div>
      <h2>Update Food Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field is pre-filled with original foodItem name that is to be changed */}
        <Input
          type="text"
          variant='flushed'
          value={foodItem.Food || ''} 
          onChange={(e) => setFoodItem({ ...foodItem, Food: e.target.value })}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateFoodItem;