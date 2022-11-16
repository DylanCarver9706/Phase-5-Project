import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Search from "../components/Search"
// import ItemDetails from "./ItemDetails";


function ItemContainer({ buyer }) {

    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(`/items`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    // let cartItems = items.filter(item => {
    //     return item.cart_status === false
    // })

    let availableItems = items.filter(item => {
        return item.sold_status === false
    })

    let filteredItems = availableItems.filter(item => {
        return item.item_name.toLowerCase().includes(searchTerm)
    })

    return (
        <body>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <br></br>
            <aricle id="home-cards">
                {/* {items.map(item => <p id="invisible"><ItemDetails items={items} /></p>)} */}
                {filteredItems.map(item => <ItemCard buyer={buyer} item={item} key={item.id} />)}
            </aricle>
        </body>
    )
}

export default ItemContainer;