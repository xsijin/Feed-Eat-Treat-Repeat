import React from "react";

const DeleteFoodItem = ({ entryId }) => {
  const handleDelete = () => {
    // Make a DELETE request using the entryId to remove the specific item from Airtable
  };

  return (
    <div>
      <h2>Delete Food Item</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteFoodItem;