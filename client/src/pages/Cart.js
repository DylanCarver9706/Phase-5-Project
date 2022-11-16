import React, { useState, useEffect } from "react";
import ItemCardCart from "../components/ItemCardCart";
import { Button } from "../styles";
import { Link } from "react-router-dom";

function Cart({buyer}) {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("/buyer_carts")
            .then(response => response.json())
            .then(data => setCartItems(data))
    }, [])

    let inCartItems = cartItems.filter(items => {
        return items.buyer_id === buyer.id
    })

    // console.log(inCartItems)

    return (
        <div>
            {inCartItems.length > 0 ? (
                <div>
                    <Button as={Link} to="/checkout">
                        Ready to Checkout?
                    </Button>
                    <ul className="cards">
                        {inCartItems.map(cartItems => <ItemCardCart cartItems={cartItems} key={cartItems.id} />)}
                    </ul>
                </div>
            ) : (
                <h1>Cart Empty</h1>
            )}
        </div>
    )
}
export default Cart;