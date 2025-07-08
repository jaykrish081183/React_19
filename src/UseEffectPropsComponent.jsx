import { useState, useEffect } from "react";

const UseEffectPropsComponent = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        console.log('UseEffectPropsComponent');
        setCount(count + 1);
    }

    useEffect(() => {
        handleClick();
    }, []); 

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
} 

export default UseEffectPropsComponent;