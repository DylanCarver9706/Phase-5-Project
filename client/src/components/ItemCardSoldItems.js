function ItemCardSoldItems({ soldItems }) {
    // console.log(soldItems)

    return (
        <div className="card">
            <h1>{soldItems.item.item_name}</h1>
            <h2>Sold Price: ${soldItems.item.price}</h2>
            <img src={soldItems.item.img_url} alt={soldItems.item.item_name} />
            <h2>Buyer {soldItems.buyer.username} has paid! Please ship to {soldItems.buyer.address}</h2>
        </div>
    );
}

export default ItemCardSoldItems;