import { useState, useEffect } from "react";

const UseEffectState = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        console.log('Button clicked');
        setCount(count + 1);
    }

    useEffect(() => {
        handleClick();
    }, []); 
    // [] means this effect runs only once after the initial render
    // If you want it to run on every count change, use [count] instead
    // If you want it to run on every render, use no dependency array
    // If you want it to run on specific state changes, include those states in the array
    // For example: useEffect(() => { handleClick(); }, [count]);
    
    return (
        <div>
            <h1>UseEffect Hooks Example</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default UseEffectState;