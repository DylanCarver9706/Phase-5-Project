import React, { useState, useEffect } from "react";
import ItemCardSoldItems from "../components/ItemCardSoldItems";
import { Button } from "../styles"
import { Link } from "react-router-dom";
// import NewItemForm from "./NewItemForm";

// 

function SellerSummary({ buyer }) {


    const [purchasedItems, setPurchasedItems] = useState([])

    useEffect(() => {
        fetch("/purchased_items")
            .then(response => response.json())
            .then(data => setPurchasedItems(data))
    }, [])


    let buyerPurchasedItems = purchasedItems.filter(items => {
        return items.item.seller_id === buyer.id
    })
    // console.log(buyerPurchasedItems)

    let sum = 0;
    for (let i = 0; i < buyerPurchasedItems.length; i++) {
        sum += parseInt(buyerPurchasedItems[i].item.price);
    }

    return (
        <div>
            <h1>Hello, {buyer.full_name}, You've Earned ${(sum)} Selling {buyerPurchasedItems.length} Item(s)!</h1>
            <br></br>
            <Button as={Link} to="/new_item">
                Sell Your Stuff!
            </Button>
            <Button as={Link} to="/active_items">
                Check On Your Stuff!
            </Button>
            <article className="cards">
                {buyerPurchasedItems.map(soldItems => <ItemCardSoldItems soldItems={soldItems} key={soldItems.id} />)}
            </article>
        </div>
    )
}
export default SellerSummary;