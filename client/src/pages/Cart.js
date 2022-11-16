import React, { useState, useEffect } from "react";
import ItemCardCart from "../components/ItemCardCart";
import { Button } from "../styles";
import { Link } from "react-router-dom";

// Need to find a way to not have cart items appear across all user accounts
// need possibly another join table called customer_cart that holds buyer_id and
// item_id. Would be a POST request like purchased_items. Then cart fetch wouldn't
// filter items from /items, it would just display from /cart_items that filters
// based on buyer id like in purchases
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
        <div id="App">
            {inCartItems.length > 0 ? (
                <div>
                    <Button as={Link} to="/checkout">
                        Ready to Checkout?
                    </Button>
                    <ul className="cards">
                        {inCartItems.map(cartItems => <ItemCardCart cartItems={cartItems} key={cartItems.id} buyer={buyer}/>)}
                    </ul>
                </div>
            ) : (
                <h1>Cart Empty</h1>
            )}
        </div>
    )
}
export default Cart;