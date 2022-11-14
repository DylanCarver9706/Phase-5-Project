import React, { useState, useEffect } from "react";
import { Button } from "../styles";
// import { Link } from "react-router-dom";

// 3. Find a way to do a while/whatever loop to iterate through the items during the PATCH
// so the user can purchase more than one item at a time
// example: if inCartItems.length > 0, run handleCheckout on index [0]
// 4. make function for adding prices together
function Checkout({ buyer }) {

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch("/items")
            .then(response => response.json())
            .then(data => setCartItems(data))
    }, [])

    let inCartItems = cartItems.filter(items => {
        return items.cart_status === true
    })

    const handleCheckout = () => {
        
        let itemCount = inCartItems.length > 0

        if (itemCount) {
            fetch(`/items/${inCartItems[0].id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ cart_status: !inCartItems[0].cart_status, sold_status: !inCartItems[0].sold_status })
            })
                .then(resp => resp.json())
                .then(data => console.log(data))

            let newPurchaseInfo = {
                buyer_id: buyer.id,
                item_id: inCartItems[0].id
            }

            fetch(`/purchased_items`, {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(newPurchaseInfo)
            })
                .then(resp => resp.json())
                .then(data => console.log(data))
            window.location.reload(false)
        } else {
            console.log("That did not work")
        }
    }

    return (
        <div>
            <h1>Confirm Details:</h1>
            <h2>Items: {inCartItems.length}</h2>
            <h2>Total: </h2>
            <h2>Ship To: {buyer.address}</h2>
            <h2>Fake Card Info: 1234-5678-9876-5432</h2>
            <h2>Email Confirmation: {buyer.email}</h2>
            <Button onClick={handleCheckout}   >
                Checkout!
            </Button>
            {/* as={Link} to="/" */}
        </div>
    )
}
export default Checkout;