import React, { useState } from "react";

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
    <div className="card">
      <img src={item.img_url} alt={item.item_name} />
      <h4>{item.item_name}</h4>
      <p>Price: ${item.price}</p>
      <p>* {item.description} *</p>
      {addToCart ? (
        <button onClick={handleAddToCart}>Remove From Cart</button>
      ) : (
        <button className="primary" onClick={handleAddToCart}>Add To Cart</button>
      )}
    </div>
  );
}

export default ItemCard;