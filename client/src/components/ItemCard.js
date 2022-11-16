import React, { useState, useEffect } from "react";
import { Button } from "../styles";

function ItemCard({ item, buyer }) {
  // console.log(item)

  const [addToCart, setAddToCart] = useState(item.cart_status)
  const [cartItems, setCartItems] = useState([])

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

    let newCartInfo = {
      buyer_id: buyer.id,
      item_id: item.id
    }

    fetch(`/buyer_carts`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newCartInfo)
    })
      .then(resp => resp.json())
      .then(data => console.log(data))

      window.location.reload(false)
  }

  useEffect(() => {
    fetch("/buyer_carts")
        .then(response => response.json())
        .then(data => setCartItems(data))
}, [])

let inCartItems = cartItems.filter(items => {
  return items.buyer_id === buyer.id
})

// console.log(inCartItems.item.id)

  const handleRemoveFromCart = () => {
    setAddToCart(addToCart => !addToCart)

    fetch(`/items/${inCartItems[0].item.id}`, {
      method: 'PATCH',
      headers: {
          "Content-Type": 'application/json',
      },
      body: JSON.stringify({ cart_status: !inCartItems[0].item.cart_status })
  })
      .then(resp => resp.json())
      .then(data => console.log(data))

    fetch(`/buyer_carts/${inCartItems[0].id}`, {
      method: 'DELETE'
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
        {/* <p class="home-card-desc">{item.description}</p> */}
        {addToCart ? (
          // null
          <Button className="primary" onClick={handleRemoveFromCart}>Remove From Cart</Button>
        ) : (
          <Button className="primary" onClick={handleAddToCart}>Add To Cart</Button>
        )}
      </div>
      <br></br>
    </div>
  );
}

export default ItemCard;