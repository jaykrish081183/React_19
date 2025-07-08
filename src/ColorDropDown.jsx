import { useState } from "react";
import Clock from "./Clock";
const ColorDropDown = () => {
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>Select Color</h1>
            <select onChange={(event) => setColor(event.target.value)} value={color}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select><br/><br/>
            <Clock color={color} />
        </div>
    )
}
export default ColorDropDown;