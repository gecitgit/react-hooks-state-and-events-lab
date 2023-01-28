import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, swapCart] = useState(false)

  function cartHandler() {
    console.log("cart button clicked")
    swapCart((inCart) => !inCart)
  }
  
  return (
    <li className={`${inCart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className={`${inCart ? "remove" : "add"}`}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
