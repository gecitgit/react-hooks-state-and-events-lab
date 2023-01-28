import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //map a ...find out how to link the categories from items and turn it into a number?
  const [selectedCategory, setSelectedCategory] = useState("All")

  function changeHandler(e) {
    setSelectedCategory(e.target.value)
    console.log("this was selecteD: " + e.target.value)
  }

  const filteredItems = items.filter((item => {
    if (selectedCategory === "All") {
      return true
    } 
    return item.category === selectedCategory
  }))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

/*
<ul className="Items">
        
        {items.filter(item => item.category === selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
*/

/*
-- onChange will handle the event listener
-- user selects the option in the dropdown
---- selected category will trigger a filter
---- once category is picked the <value> of that selection 
     needs to be grabbed
---- filtered items will be passed down to the UL tag
---- UL can then continue to display the accurate results
*/

export default ShoppingList;

// In the ShoppingList component, there is a <select> element that will allow us to filter the list of items by category.

// Use the useState hook to create a state variable called selectedCategory for keeping track of the selected value from this <select> element. When the value of the <select> element is changed, update state.

// You should also use the selectedCategory variable to determine which items to display in the shopping list. You'll need some way of filtering the array of items based on the selectedCategory.


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]
