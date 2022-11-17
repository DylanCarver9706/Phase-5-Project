function ItemCardActiveItems({ items }) {
    console.log(items)

    return (
        <div className="card">
            <h1>{items.item_name}</h1>
            <h2>Listed Price: ${items.price}</h2>
            <img src={items.img_url} alt={items.item_name} />
        </div>
    );
}

export default ItemCardActiveItems;