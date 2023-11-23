import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchEntries } from "./Airtable";

function UpdateFoodItem({ updateEntries, updateID }) {
  const { id } = useParams(); // Get the ID from the URL parameter
  const navigate = useNavigate();
  const [foodItem, setFoodItem] = useState({});

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/tbl7xnuDoU34SL2df/${id}`, {
      headers: {
        Authorization: `Bearer patSPU1OYQlMZDonM.94247f8b517d10f9a7b08f0453a524ff90ac510b578338ad088f2096ff065db8`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch food item');
        }
        return response.json();
      })
      .then(data => {
        setFoodItem(data.fields); // Assuming the data structure from Airtable
      })
      .catch(error => {
        console.error('Error fetching food item:', error);
      });
  }, [id]);


  
  const handleSubmit = (e) => {
    e.preventDefault();

      // Construct the payload in the expected format
  const payload = {
    fields: {
      Food: foodItem.Food // Assuming foodItem.Food contains the updated food name
    }
  };
  
  // Perform the update operation using the fetched foodItem details
  fetch(`https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/tbl7xnuDoU34SL2df/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer patSPU1OYQlMZDonM.94247f8b517d10f9a7b08f0453a524ff90ac510b578338ad088f2096ff065db8',
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
          // Fetch the updated entries again and update the state with the entire list
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
        {/* Form fields pre-filled with foodItem details */}
        {/* Update input fields based on your specific Airtable fields */}
        <input
          type="text"
          value={foodItem.Food || ''} // Replace fieldName with your Airtable field
          onChange={(e) => setFoodItem({ ...foodItem, Food: e.target.value })}
        />
        {/* Other input fields */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateFoodItem;