import React, { useState, useEffect } from "react";
import { Button } from "../styles";
import { Link } from "react-router-dom";

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

        let sum = 0;
        for(let i=0; i < inCartItems.length; i++){
            sum += parseInt(inCartItems[i].price);
        }

        const handleCheckout = () => {

            for (let i = 0;
                i < inCartItems.length; i++) {
                fetch(`/items/${inCartItems[i].id}`, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": 'application/json',
                    },
                    body: JSON.stringify({ cart_status: !inCartItems[i].cart_status, sold_status: !inCartItems[i].sold_status })
                })
                    .then(resp => resp.json())
                    .then(data => console.log(data))

                let newPurchaseInfo = {
                    buyer_id: buyer.id,
                    item_id: inCartItems[i].id
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
            }

        }

        return (
            <div>
                <h1>Confirm Details:</h1>
                <h2>Items: {inCartItems.length}</h2>
                <h2>Total: ${(sum)}</h2>
                <h2>Ship To: {buyer.address}</h2>
                <h2>Card Info: 1234-5678-9876-5432</h2>
                <h2>Email Confirmation: {buyer.email}</h2>
                <Button onClick={handleCheckout} as={Link} to="/" >
                    Checkout!
                </Button>
            </div>
        )
    }
    export default Checkout;