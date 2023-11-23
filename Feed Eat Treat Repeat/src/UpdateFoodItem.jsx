import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateFoodItem() {
  const { id } = useParams(); // Get the ID from the URL parameter
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
    // Perform the update operation using the fetched foodItem details
    // Add your logic here to update the food item
  };

  // Your update form rendering with populated data
  return (
    <div>
      <h2>Update Food Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields pre-filled with foodItem details */}
        {/* Update input fields based on your specific Airtable fields */}
        <input
          type="text"
          value={foodItem.fieldName || ''} // Replace fieldName with your Airtable field
          onChange={(e) => setFoodItem({ ...foodItem, fieldName: e.target.value })}
        />
        {/* Other input fields */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateFoodItem;