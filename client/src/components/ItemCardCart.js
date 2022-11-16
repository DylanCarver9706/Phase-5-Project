import React, { useState } from "react";
import { Button } from "../styles";


function ItemCardCart({ cartItems, buyer }) {
    // console.log(cartItems)

    const [addToCart, setAddToCart] = useState(true)

    const handleAddToCart = () => {
        setAddToCart(addToCart => !addToCart)

        // fetch(`/items/${cartItems.item.id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         "Content-Type": 'application/json',
        //     },
        //     body: JSON.stringify({ cart_status: !cartItems.item.cart_status })
        // })
        //     .then(resp => resp.json())
        //     .then(data => console.log(data))

            
            // let newCartInfo = {
            //     buyer_id: buyer.id,
            //     item_id: cartItems.item.id
            //   }
          
            //   fetch(`/buyer_carts`, {
            //     method: 'POST',
            //     headers: {
            //       "Accept": 'application/json',
            //       "Content-Type": 'application/json',
            //     },
            //     body: JSON.stringify(newCartInfo)
            //   })
            //     .then(resp => resp.json())
            //     .then(data => console.log(data))



            fetch(`/buyer_carts/${cartItems.id}`, {
                method: 'DELETE'
            })
                .then(resp => resp.json())
                .then(data => console.log(data))

            window.location.reload(false)
    }

    return (
        <div className="card">
            <img src={cartItems.item.img_url} alt={cartItems.item.item_name} />
            <h4>{cartItems.item.item_name}</h4>
            <p>Price: ${cartItems.item.price}</p>
            {/* <p>* {cartItems.item.description} *</p> */}
            {addToCart ? (
                <Button onClick={handleAddToCart}>Remove From Cart</Button>
            ) : (
                null
            )}
        </div>
    );
}

export default ItemCardCart;