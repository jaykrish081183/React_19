import { useState } from "react";

const Toggle = () => {
    const [display, setDisplay] = useState(false);
    return (
        <div>            
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {
                display ? <h1>Jayesh Patel</h1> : ''
            }
        </div>
    );
}
export default Toggle;