import { useTransition } from "react";
const UseTransitionHook = () => {
    const [isPending, startTransition] = useTransition();
    const handleButtonClick = () => {
        startTransition(async() => {
            await new Promise(resolve => setTimeout(resolve, 3000));
        });
    }
    return (
        <div>
            <h1>UseTransitionHook</h1>
            <button onClick={handleButtonClick} disabled={isPending}>Click me</button>
            {
                isPending?<img src="../public/loadingImg.gif" alt="loading" width='70px'/>:null
            }
        </div>
    )
}
export default UseTransitionHook;

/* import React, { useState, useTransition } from 'react';

function UseTransitionHook({ items }) {
  const [input, setInput] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const result = items.filter(item => item.includes(value));
      setFilteredItems(result);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
export default UseTransitionHook; */