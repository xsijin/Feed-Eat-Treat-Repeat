export default function ViewNutrition({ nutrition }) {
  // Check if nutrition exists to avoid accessing undefined properties
  if (!nutrition || !nutrition.totalNutrients) {
    return <div>No Nutrition Information available.</div>;
  }

  // Format number to round decimals up when at midpoint i.e. 3.05 -> 3.1
  function formatNumber(number) {
    if (Number.isInteger(number)) {
      return number.toFixed(0); // For whole numbers, rounds to integers
    } else {
      // Multiply by 10, round to the nearest integer, and then divide by 10 to keep one decimal place
      return (Math.round(number * 10) / 10).toFixed(1);
    }
  }

  const foodItem = nutrition.ingredients[0]?.parsed[0]?.food || "-";
  const calories = nutrition.calories
    ? `${formatNumber(nutrition.calories)} kcal`
    : "-";
  const totalFat = nutrition.totalNutrients.FAT
    ? `${formatNumber(nutrition.totalNutrients.FAT.quantity)} ${
        nutrition.totalNutrients.FAT.unit
      }`
    : "-";
  const satFat = nutrition.totalNutrients.FASAT
    ? `${formatNumber(nutrition.totalNutrients.FASAT.quantity)} ${
        nutrition.totalNutrients.FASAT.unit
      }`
    : "-";
  const protein = nutrition.totalNutrients.PROCNT
  ? `${formatNumber(nutrition.totalNutrients.PROCNT.quantity)} ${
      nutrition.totalNutrients.PROCNT.unit
    }`
  : "-";
  const carbs = nutrition.totalNutrients.CHOCDF
  ? `${formatNumber(nutrition.totalNutrients.CHOCDF.quantity)} ${
      nutrition.totalNutrients.CHOCDF.unit
    }`
      : "-";
  const fiber =
  nutrition.totalNutrients.FIBTG
  ? `${formatNumber(nutrition.totalNutrients.FIBTG.quantity)} ${
      nutrition.totalNutrients.FIBTG.unit
    }`
      : "-";
  const sugar =
  nutrition.totalNutrients.SUGAR
  ? `${formatNumber(nutrition.totalNutrients.SUGAR.quantity)} ${
      nutrition.totalNutrients.SUGAR.unit
    }`
      : "-";
  const sodium =
  nutrition.totalNutrients.NA
  ? `${formatNumber(nutrition.totalNutrients.NA.quantity)} ${
      nutrition.totalNutrients.NA.unit
    }`
      : "-";
  const iron =
  nutrition.totalNutrients.FE
  ? `${formatNumber(nutrition.totalNutrients.FE.quantity)} ${
      nutrition.totalNutrients.FE.unit
    }`
      : "-";
  const calcium =
  nutrition.totalNutrients.CA
  ? `${formatNumber(nutrition.totalNutrients.CA.quantity)} ${
      nutrition.totalNutrients.CA.unit
    }`
      : "-";
  const vitaD =
  nutrition.totalNutrients.VITD
  ? `${formatNumber(nutrition.totalNutrients.VITD.quantity)} ${
      nutrition.totalNutrients.VITD.unit
    }`
      : "-";
  const potassium =
  nutrition.totalNutrients.K
  ? `${formatNumber(nutrition.totalNutrients.K.quantity)} ${
      nutrition.totalNutrients.K.unit
    }`
      : "-";

  return (
    <>
      <div className="whitebg">
        <h2>Nutrition Information</h2>

        <div className="values">
          <hr className="line" />
          <div className="serving">per 100g of {foodItem}</div>
          <hr className="line" />
          <b>Calories/Energy</b> {calories}
          <hr className="line" />
          <ul>
            <b>Total Fat</b> {totalFat}
            <li>Saturated Fat {satFat}</li>
          </ul>
          <hr className="line" />
          <b>Protein</b> {protein}
          <hr className="line" />
          <ul>
            <b>Total Carbohydrate</b> {carbs}
            <li>Dietary Fiber {fiber}</li>
            <li>Total Sugars {sugar}</li>
          </ul>
          <hr className="line" />
          <b>Sodium</b> {sodium}
          <hr className="line" />
          Iron {iron}
          <hr className="line" />
          Calcium {calcium}
          <hr className="line" />
          Vitamin D {vitaD}
          <hr className="line" />
          Potassium {potassium}
        </div>
      </div>
    </>
  );
}
