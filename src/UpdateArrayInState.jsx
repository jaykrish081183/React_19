import { useState } from "react";
const UpdateArrayInState = () => {
    const [fruits, setFruits] = useState(["apple", "banana", "cherry", "strawberry"]);
    const [fruitDetails, setFruitDetails] = useState([
        { name: "apple",price: 100, quantity: 10 },
        { name: "banana",price: 200, quantity: 20 },
        { name: "cherry",price: 300, quantity: 30 },
        { name: "strawberry",price: 400, quantity: 40 }
    ]);
    // Update Array in State
    const handleUpdateFruits = (fruit) => {
        fruits[fruits.length - 1] = fruit;
        setFruits([...fruits]);
    }
    /* Start - Update Object in State */
    const handleUpdateFruitName = (fruitName) => {
        fruitDetails[fruitDetails.length - 1].name = fruitName;
        setFruitDetails([...fruitDetails]);
    }
    const handleUpdateFruitPrice = (fruitPrice) => {
        fruitDetails[fruitDetails.length - 1].price = fruitPrice;
        setFruitDetails([...fruitDetails]);
    }
    const handleUpdateFruitQty = (fruitQty) => {
        fruitDetails[fruitDetails.length - 1].quantity = fruitQty;
        setFruitDetails([...fruitDetails]);
    }
    /* End - Update Object in State */
    return (
        <div>
            <h2>Update Array in State</h2>
            <input type="text" name="fruitName" id="fruitName" placeholder="Enter Fruit Name" onChange={(event) => { handleUpdateFruitName(event.target.value) }} />
            <input type="text" name="fruitPrice" id="fruitPrice" placeholder="Enter Fruit Price" onChange={(event) => { handleUpdateFruitPrice(event.target.value) }} />
            <input type="text" name="fruitQuantity" id="fruitQuantity" placeholder="Enter Fruit Quantity" onChange={(event) => { handleUpdateFruitQty(event.target.value) }} />
            {
                fruitDetails.map((item, index) => (
                    <h4 key={index}>{item.name}, {item.price}, {item.quantity}</h4>
                ))
            } <hr />
            <input type="text" name="fruit" id="fruit" onChange={(event) => { handleUpdateFruits(event.target.value) }} />
            {
                fruits.map((fruit, index) => (
                    <h4 key={index}>{fruit}</h4>
                ))
            }
        </div>
    )
}
export default UpdateArrayInState;