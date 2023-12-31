import { useState, useEffect } from "react";
import { fetchEntries } from "./Airtable";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LuTrash2, LuClipboardEdit } from "react-icons/lu";


export default function FoodItem({ entries, foodItem, handleSubmit, foodItemIdMap, updateEntries, updateID }) {
  const apiKey = import.meta.env.VITE_MY_KEY;

  const [NutritionTitle, setNutritionTitle] = useState("");

    const handleClick = (clickedItem) => {
        handleSubmit(clickedItem);
        setNutritionTitle(clickedItem);
      };

      const { id } = useParams(); // Get the ID from the URL parameter
      
      const handleDelete = (id) => {
        // Perform the deletion on Airtable
        fetch(`https://api.airtable.com/v0/app0oXVuGeHq2HRYJ/tbl7xnuDoU34SL2df/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete food item');
                }
                return response.json();
            })
            .then(deletedData => {
                // Update entries & ID after successful deletion to re-render entries
                fetchEntries()
                .then(data => {
                  const extractedEntries = data.records.map(record => record.fields["Food"]);
                  updateEntries(extractedEntries);
                  updateID(data);
                    })
                    .catch(error => {
                        console.error('Error fetching updated entries:', error);
                    });
            })
            .catch(error => {
                console.error('Error deleting food item:', error);
            });
    };

    return (
      <>
     <li className="fooditem">
     <button
        className="info"
        value={foodItem}
        onClick={() => handleClick(foodItem)}
      >
        i
      </button> {foodItem}  
      
      <div className="right">
        {/* Link to the update route with the food item ID */}
              <Link to={`/update/${foodItemIdMap[foodItem]}`} style={{ display: "inline-block" }}> <LuClipboardEdit /> </Link> 
                {/* Delete icon */}
                <span
                    onClick={() => handleDelete(foodItemIdMap[foodItem])}
                    className="delete"
                >
                    <LuTrash2 />
                </span></div>
    </li>
</>
    );
}