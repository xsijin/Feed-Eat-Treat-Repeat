# Welcome to Feed Eat Treat Repeat!

Here's a nutritional food diary that combines meal logging and nutritional analysis. With parents and health-conscious individuals in mind, it serves as a tool to plan meals and as a handy checklist while grocery shopping.

When calling the food item to fetch nutrition values, the API will fetch the closest food item that matches the input food name. For example, trying to fetch the nutrition information of "Roti Prata" will result in "Chapati".

:cherries: Have fun! :carrot:

## Background Information

The project, titled "Feed Eat Treat Repeat" draws inspiration from the timeless mantra "Live, Laugh, Love, Repeat." We hope to infuse the same spirit of joy into making healthy meals.

Backed by the need to record and track my child's nutritional intake, this platform is designed to empower parents with a holistic view of their children's dietary habits. Whether for meal planning, understanding nutrition, or keeping a record of daily food intake, our Food Diary is here to simplify your journey towards healthier eating habits.

## Screenshots

**PC view** - nutrition information is displayed on the right.

<img src="/Feed%20Eat%20Treat%20Repeat/public/pc_view.png">

**Mobile-friendly view** - nutrition information is displayed below the food list due to narrower mobile screen.

<img src="/Feed%20Eat%20Treat%20Repeat/public/mobile_view.png">

## Technologies Used

JavaScript, CSS, HTML, React, React Router, Vite, GitHub, Vercel, Chakra-UI

## Getting Started

Game link: https://feed-eat-treat-repeat.vercel.app/

Key in food item to add into the diary.

The "Edit"<img src="/Feed%20Eat%20Treat%20Repeat/public/edit.png"> and "Delete"<img src="/Feed%20Eat%20Treat%20Repeat/public/delete.png"> functions for food items are located on the right of each item.

Click on "i"<img src="/Feed%20Eat%20Treat%20Repeat/public/info.png"> bullet of each item to view the nutrition information.

Click on "Clear"<img src="/Feed%20Eat%20Treat%20Repeat/public/clear.png"> at the bottom right of nutrition information to reset nutrition values.

## Next Steps

- [ ] Add in alert confirmation when deleting.
- [ ] Add in "Back" button in UpdateFoodItem page to cancel the edit request & return to main App without changes.
- [ ] Add in a notification that nutrition information is loading while waiting for API to fetch values.
- [ ] Split entries for different dates and meals (i.e. breakfast, lunch, dinner, snack.)
- [ ] Function to sum up the total nutrition values of one meal based on all the food items/ingredients.
- [ ] Allow users to customize the weight of their food item in order to fetch the nutrition information more accurately. Current nutrition analysis default is set to 100g.
- [ ] Include recommended daily intake (based on age of user) to compare with the consumed nutrition intake.
- [ ] Highlight food items with allergen risk for users to take note.
- [ ] Improve on the UI, create themes (light/dark).


## Favourite API Call

The API will return nutrition values in a table, similar to nutrition fact labels found on food products.

<img src="/Feed%20Eat%20Treat%20Repeat/public/apireturn.png">

## Routing Component

App: Main page 

UpdateFoodItem: Edit food item page 

## Favourite React Component

```
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>,
)
```

Reason: clean, sleek, not cluttered with props, straight to the point

## Biggest Challenge

My biggest challenge was mapping the Airtable ID back to the food item I want to edit/delete for CRUD after a new food is added. While the rest of the food items are able to render the correct ID, the newly added food item kept showing 'undefined' ID. Until now, I believe I am still overthinking it. Would love to discuss alternatives to make the code more efficient. It also introduced an issue where 2 food items of the same name may map to the same ID, which causes a conflict on the actual food item to be edited/deleted.

```
  const [foodItemIdMap, setFoodItemIdMap] = useState({});
```

```
  const updateID = (updatedData) => {

    const updatedFoodToID = {};
    updatedData.records.forEach((record) => {
      const id = record.id;
      const foodItem = record.fields["Food"];
      updatedFoodToID[foodItem] = id;
    });

    setFoodItemIdMap(updatedFoodToID);
  };
```

```
<Route path="/update/:id" element={<UpdateFoodItem updateEntries={updateEntries} updateID={updateID}/>} />
```

```
 <Link to={`/update/${foodItemIdMap[foodItem]}`} 
``` 

```
<span onClick={() => handleDelete(foodItemIdMap[foodItem])}
```

## Key Learning / Takeaways

Have a big picture in mind, then code the smaller components.

If the problem is too big, break it down into smaller components.

Do not be afraid to ask questions, even if the receiving end is an AI.

## Resources

- [Edamam](https://www.edamam.com/): API for nutrtition analysis
- [Airtable](https://airtable.com/app0oXVuGeHq2HRYJ/shrNAt1ACcjkQxAAg): Database for storing food entries allowing API & CRUD functionality
- [Trello](https://trello.com/invite/b/oB1SgKRV/ATTI3f5d94730f85d98434743a356613b6839038BC90/feed-eat-treat-repeat): Task and project management platform
- [Bruno](https://www.usebruno.com/): API Client
- [Icons8](https://icons8.com) - [Nutrition favicon](https://icons8.com/icon/104293/organic-food)