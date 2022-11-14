import React, { useState, useEffect } from "react";
import ItemCardPurchases from "../components/ItemCardPurchases";

function Purchases({ buyer }) {

    const [purchasedItems, setPurchasedItems] = useState([])

    useEffect(() => {
        fetch("/purchased_items")
            .then(response => response.json())
            .then(data => setPurchasedItems(data))
    }, [])

    let buyerPurchasedItems = purchasedItems.filter(items => {
        return items.buyer.id === buyer.id
    })
    console.log(buyerPurchasedItems)

    return (
        <div>
            <h1>Hello, {buyer.full_name}</h1>
            <ul className="cards">
                {buyerPurchasedItems.map(specificPurchasedItems => <ItemCardPurchases specificPurchasedItems={specificPurchasedItems} key={specificPurchasedItems.id} />)}
            </ul>
        </div>
    )
}
export default Purchases;