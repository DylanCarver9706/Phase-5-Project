import React, { useState } from "react";
//  , useEffect
import { Button } from "../styles";
// import { Link } from "react-router-dom";
// import ItemDetails from "../pages/ItemDetails";

function ItemCard({ item, buyer }) {
  // console.log(item)

  const [addToCart, setAddToCart] = useState(item.cart_status)
  // const [items, setItems] = useState([])
  // const [cartItems, setCartItems] = useState([])

  // useEffect(() => {
  //   const url = `/items/`;

  //   const fetchData = async () => {
  //       try {
  //           const response = await fetch(url);
  //           const items = await response.json();
  //           // console.log(json);
  //           setItems(items);
  //       } catch (error) {
  //           console.log("error", error);
  //       }
  //   };

  //   fetchData();
  // }, []);

  // let filterItems = items.filter(oneitem => {
  //   return oneitem.id === item.id
  // })

  // console.log(filterItems)

  const handleAddToCart = () => {
    setAddToCart(addToCart => !addToCart)

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

    // window.location.reload(false)
  }

  return (

    <li className="card">
      <img src={item.img_url} alt={item.item_name} />
      <h4>{item.item_name}</h4>
      <p>${item.price}</p>
      {addToCart ? (
        null
      ) : (
        <Button className="primary" onClick={handleAddToCart}>Add To Cart</Button>
      )}
    </li>


  );
}

export default ItemCard;