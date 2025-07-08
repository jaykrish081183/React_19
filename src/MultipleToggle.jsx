import { useState } from "react";
const MultipleToggle = () => {
    const [count, setCount] = useState(0);    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h1>Count: {count}</h1>
            {
                count == 0 ? <h2>Count is Zero</h2> :
                count == 1 ? <h2>Count is One</h2> :
                count == 2 ? <h2>Count is Two</h2> :
                count == 3 ? <h2>Count is Three</h2> :
                count == 4 ? <h2>Count is Four</h2> :
                count == 5 ? <h2>Count is Five</h2> :
                <h2>Count is Greater than Five</h2>
            }
        </div>
    );
}
export default MultipleToggle;