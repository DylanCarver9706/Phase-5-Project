import React, {useState} from "react";
import { Button } from "../styles"
import {  useHistory } from "react-router-dom";

function NewItemForm({buyer}) {
  const history = useHistory()
  const [seller_id, setSeller_Id] = useState(buyer.seller_id)
  const [item_name, setItem_Name] = useState("")
  const [price, setPrice] = useState("")
  const [img_url, setImage_Url] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [clock_speed, setClock_Speed] = useState("")
  const [capacity, setCapacity] = useState("")
//   console.log(buyer.seller_id)
  function submitHandler(event) {
      event.preventDefault()

      let newItem = {
        seller_id: seller_id,
        item_name: item_name,
        price: price,
        img_url: img_url,
        description: description,
        category: category,
        cart_status: false,
        sold_status: false,
        manufacturer: manufacturer,
        clock_speed: clock_speed,
        capacity: capacity

      }
      fetch(`/items`, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newItem)
    })
    .then(resp => resp.json())
    .then(history.push(`/seller_summary`))

  
    // reset input fields after submit
    setItem_Name("")
    setPrice("")
    setImage_Url("")
    setDescription("")
    setCategory("")
    setManufacturer("")
    setClock_Speed("")
    setCapacity("")
    setSeller_Id(buyer.seller_id)
  }

  return (
    <div className="new-item-form">
      <h2>New Item</h2>
      <form onSubmit={submitHandler} >
        <div className="inline fields" >
          <input onChange={(e) => setItem_Name(e.target.value)}     value={item_name}       type="text"     name="item_name"    placeholder="Name"/>
          <input onChange={(e) => setPrice(e.target.value)}         value={price}           type="number"   name="price"        placeholder="Price"/>
          <input onChange={(e) => setImage_Url(e.target.value)}     value={img_url}         type="url"      name="img_url"      placeholder="Image URL"/>
          <input onChange={(e) => setDescription(e.target.value)}   value={description}     type="text"     name="description"  placeholder="Description"/>
          <input onChange={(e) => setCategory(e.target.value)}      value={category}        type="text"     name="category"     placeholder="Category"/>
          <input onChange={(e) => setManufacturer(e.target.value)}  value={manufacturer}    type="text"     name="manufacturer" placeholder="Manufacturer"/>
          <input onChange={(e) => setClock_Speed(e.target.value)}   value={clock_speed}     type="number"   name="clock_speed"  placeholder="Clock Speed"/>
          <input onChange={(e) => setCapacity(e.target.value)}      value={capacity}        type="number"   name="capacity"     placeholder="Capacity"/>
        </div>
        <br></br>
        <Button className="ui button" type="submit">
          Add Item
        </Button>
      </form>
    </div>
  );
}

export default NewItemForm;