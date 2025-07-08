import { useState } from "react";
const InputVal = () => {
    const [val, setVal] = useState("")
    return (
        <div>
            <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter User Name" />
            <h1>{val}</h1>
            <button onClick={() => setVal("")}>Clear</button>
        </div>
    );
}
export default InputVal;