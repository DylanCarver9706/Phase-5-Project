import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import Search from "../components/Search"

function ItemContainer() {

    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(`/items`)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    let cartItems = items.filter(item => {
        return item.cart_status === false
    })

    let availableItems = cartItems.filter(item => {
        return item.sold_status === false
    })

    let filteredItems = availableItems.filter(item => {
        return item.item_name.toLowerCase().includes(searchTerm)
    })

    return (
        <div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ul className="cards">
                {filteredItems.map(item => <ItemCard item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export default ItemContainer;