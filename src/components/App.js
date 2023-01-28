import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isLight, changeMode] = useState(true)
  
  function clickHandler() {
    console.log("button was clicked")
    changeMode((isLight) => !isLight)
  }
  

  return ( 
    
    <div className={`App ${isLight ? 'light' : 'dark'}`}>
        <header>
          <h2>Shopster</h2>
          <button onClick={clickHandler}>{isLight ? "Dark Mode" : "Light Mode" }</button>
        </header>
        <ShoppingList items={itemData} />
    </div>
  
  );

}

export default App;
