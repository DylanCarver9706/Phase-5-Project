import React, { useState } from "react";

function ItemCardCart({ cartItems }) {
    // console.log(cartItems)

    const [addToCart, setAddToCart] = useState(cartItems.item.cart_status)

    const handleAddToCart = () => {
        setAddToCart(addToCart => !addToCart)

        fetch(`/items/${cartItems.item.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ cart_status: !cartItems.item.cart_status })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))

            // setAddToCart(addToCart => !addToCart)

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
                <button onClick={handleAddToCart}>Remove From Cart</button>
            ) : (
                null
            )}
        </div>
    );
}

export default ItemCardCart;