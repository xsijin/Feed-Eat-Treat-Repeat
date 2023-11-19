export default function ViewNutrition({ nutrition }) {
  // Check if nutrition exists to avoid accessing undefined properties
  if (!nutrition || !nutrition.totalNutrients) {
    return <div>No Nutrition Information available.</div>;
  }

  const foodItem = nutrition.ingredients[0].parsed[0].food;
  const calories = nutrition.calories.toFixed(0) + " kcal";
  const totalFat =
    nutrition.totalNutrients.FAT.quantity.toFixed(1) + nutrition.totalNutrients.FAT.unit;
  const satFat =
    nutrition.totalNutrients.FASAT.quantity.toFixed(1) +
    nutrition.totalNutrients.FASAT.unit;
  const protein =
    nutrition.totalNutrients.PROCNT.quantity.toFixed(1) +
    nutrition.totalNutrients.PROCNT.unit;
  const carbs =
    nutrition.totalNutrients.CHOCDF.quantity.toFixed(1) +
    nutrition.totalNutrients.CHOCDF.unit;
  const fiber =
    nutrition.totalNutrients.FIBTG.quantity.toFixed(1) +
    nutrition.totalNutrients.FIBTG.unit;
  const sugar =
    nutrition.totalNutrients.SUGAR.quantity.toFixed(1) +
    nutrition.totalNutrients.SUGAR.unit;
  const sodium =
    nutrition.totalNutrients.NA.quantity.toFixed(1) + nutrition.totalNutrients.NA.unit;
  const iron =
    nutrition.totalNutrients.FE.quantity.toFixed(1) + nutrition.totalNutrients.FE.unit;
  const calcium =
    nutrition.totalNutrients.CA.quantity.toFixed(1) + nutrition.totalNutrients.CA.unit;
  const vitaD =
    nutrition.totalNutrients.VITD.quantity.toFixed(1) + nutrition.totalNutrients.VITD.unit;
  const potassium =
    nutrition.totalNutrients.K.quantity.toFixed(1) + nutrition.totalNutrients.K.unit;

  return (
    <>
      <div className="whitebg">
        <h2>Nutrition Information</h2>

        <div className="values">
          <hr className="line" />
          <div className="serving">per 100g of {foodItem}</div>
          <hr className="line" />
          <b>Calories/Energy:</b> {calories}
          <hr className="line" />
          <ul>
            <b>Total Fat:</b> {totalFat}
            <li>Saturated Fat: {satFat}</li>
          </ul>
          <hr className="line" />
          <b>Protein:</b> {protein}
          <hr className="line" />
          <ul>
            <b>Total Carbohydrate:</b> {carbs}
            <li>Dietary Fiber: {fiber}</li>
            <li>Total Sugars: {sugar}</li>
          </ul>
          <hr className="line" />
          <b>Sodium:</b> {sodium}
          <hr className="line" />
          Iron: {iron}
          <hr className="line" />
          Calcium: {calcium}
          <hr className="line" />
          Vitamin D: {vitaD}
          <hr className="line" />
          Potassium: {potassium}
        </div>
      </div>
    </>
  );
}
