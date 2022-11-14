import React, { useState } from "react";

function ItemCardCart({ cartItems }) {

    const [addToCart, setAddToCart] = useState(cartItems.cart_status)

    const handleAddToCart = () => {
        setAddToCart(addToCart => !addToCart)

        fetch(`/items/${cartItems.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ cart_status: !cartItems.cart_status })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))

        window.location.reload(false)
    }

    return (
            <div className="card">
                <img src={cartItems.img_url} alt={cartItems.item_name} />
                <h4>{cartItems.item_name}</h4>
                <p>Price: ${cartItems.price}</p>
                <p>* {cartItems.description} *</p>
                {addToCart ? (
                    <button onClick={handleAddToCart}>Remove From Cart</button>
                ) : (
                    null
                )}
            </div>
    );
}

export default ItemCardCart;