import React, { useState} from "react";
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
    <div>
      <div id="home-card">
        {/* <Link to="/item_details" > */}
          <img class="home-card-image" src={item.img_url} alt={item.item_name} />
        {/* </Link> */}
        {/* <Link to="/item_details"> */}
          <h2>{item.item_name}</h2>
        {/* </Link> */}
        <h2>${item.price}</h2>
        {/* <p class="home-card-desc">{item.description}</p> */}
        {addToCart ? (
          null
          // <Button className="primary" onClick={handleRemoveFromCart}>Remove From Cart</Button>
        ) : (
          <Button className="primary" onClick={handleAddToCart}>Add To Cart</Button>
        )}
      </div>
      {/* <p id="invisible"><ItemDetails filterItems={filterItems} /></p> */}
      <br></br>
    </div>
  );
}

export default ItemCard;