import React, { useState } from "react";
import { Button } from "../styles";

function ItemCard({ item }) {

  const [addToCart, setAddToCart] = useState(item.cart_status)

  const handleAddToCart = () => {
    setAddToCart(addToCart => !addToCart)

    fetch(`/items/${item.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ cart_status: !item.cart_status })
    })
      .then(resp => resp.json())
      .then(data => console.log(data))

    window.location.reload(false)
  }

  return (
    <div>
      <div id="home-card">
        <img class="home-card-image" src={item.img_url} alt={item.item_name} />
        <h4>{item.item_name}</h4>
        <p>Price: ${item.price}</p>
        <p class="home-card-desc">{item.description}</p>
        {addToCart ? (
          <Button className="home-card-btn" onClick={handleAddToCart}>Remove From Cart</Button>
        ) : (
          <Button className="primary" onClick={handleAddToCart}>Add To Cart</Button>
        )}
      </div>
      <br></br>
    </div>
  );
}

export default ItemCard;