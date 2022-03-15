import React, { useState }from "react";

function Item({ name, category }) {
  
  const [isOn1, setIsOn1] = useState(false)
  
  function handleClcik(){
    setIsOn1((isOn1) => !isOn1)
  }

const itemInCart = isOn1 ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={isOn1 ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isOn1 ? "remove" : "add"} onClick={handleClcik}>{itemInCart}</button>
    </li>
  );
}

export default Item;
