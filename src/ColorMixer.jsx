
import { useState} from "react";

const ColorMixer = () => {
    const colors = JSON.parse(localStorage.getItem("color"));
    const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
    const [green, setGreen] = useState(colors && colors.green ? colors.green : 0);
    const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);

    const saveColor = () => {
        localStorage.setItem("color", JSON.stringify({ red, green, blue }));
    }

    return (
        <div style={{ textAlign: "left" }}>
            <h1>Color Mixer</h1>
            <div style={{ backgroundColor: `rgb(${red},${green},${blue})`, width: "200px", height: "200px" }}></div><br/>
            <label>Red</label>
            <input type="range" value={red} onChange={(event) => setRed(event.target.value) } min="0" max="255" /><br/><br/>
            <label>Green</label>
            <input type="range" value={green} onChange={(event) => setGreen(event.target.value) } min="0" max="255" /><br/><br/>
            <label>Blue</label>
            <input type="range" value={blue} onChange={(event) => setBlue(event.target.value) } min="0" max="255" /><br/><br/>
            <button onClick={saveColor}>Save Color</button>
        </div>
    );
};

export default ColorMixer;
