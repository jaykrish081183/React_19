import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0)
    const [fruit, setFruit] = useState("Apple");
    const handleFruit = () => {
        setFruit("Banana");
    }
    return (
        <>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit</button>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}
export default Counter;
