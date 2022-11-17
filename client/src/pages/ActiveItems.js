import React, { useState, useEffect } from "react";
import ItemCardActiveItems from "../components/ItemCardActiveItems";
import { Button } from "../styles"
import { Link } from "react-router-dom";

// 

function ActiveItems({ buyer }) {


    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    // console.log(buyer.seller_id)

    let sellersItems = items.filter(items => {
        return items.seller_id === buyer.seller_id
    })

    let unsoldItems = sellersItems.filter(items => {
        return items.sold_status === false
    })

    // console.log(unsoldItems)

    

    // let sum = 0;
    // for (let i = 0; i < buyerPurchasedItems.length; i++) {
    //     sum += parseInt(buyerPurchasedItems[i].item.price);
    // }

    return (
        <div>
            {/* <h1>Hello, {buyer.full_name}, You've Earned ${(sum)} Selling {buyerPurchasedItems.length} Item(s)!</h1> */}
            <br></br>
            <Button as={Link} to="/new_item">
                Sell Your Stuff!
            </Button>
            <article className="cards">
                {unsoldItems.map(items => <ItemCardActiveItems items={items} key={items.id} />)}
            </article>
        </div>
    )
}
export default ActiveItems;