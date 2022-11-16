import React from "react";
// , { useState, useEffect }
// import { Button } from "../styles";

function ItemDetails({ buyer, filterItems}) {
    // console.log(filterItems[0].id)
    // const [oneItem, setOneItem] = useState([])


    // useEffect(() => {
    //   const url = `/items/${filterItems.id}`;
    
    //   const fetchData = async () => {
    //       try {
    //           const response = await fetch(url);
    //           const oneItem = await response.json();
    //           // console.log(json);
    //           setOneItem(oneItem);
    //       } catch (error) {
    //           console.log("error", error);
    //       }
    //   };
    
    //   fetchData();
    // }, []);

    // console.log(oneItem.item_name)

    return (
        // <p>Test</p>
        <div>
            {/* <img class="home-card-image" src={filterItems.img_url} alt={filterItems.item_name} /> */}
        {/* <h4>{oneItem.item_name}</h4> */}
        {/* <p>Price: ${items.price}</p> */}
        {/* <p class="home-card-desc">{item.description}</p> */}
        {/* {addToCart ? (
          // null
          <Button className="primary" onClick={handleRemoveFromCart}>Remove From Cart</Button>
        ) : (
          <Button className="primary" onClick={handleAddToCart}>Add To Cart</Button>
        )} */}
        </div>
    )
}
export default ItemDetails;