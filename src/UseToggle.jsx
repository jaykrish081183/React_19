import UseToggleCustomHook from "./UseToggleCustomHook";

const UseToggle = () => {
    
    const [isOpen, toggleValue] = UseToggleCustomHook(true);
    const [data, setData] = UseToggleCustomHook(true);

    return (
        <div>
            {
                isOpen?<h1>Custom Hook in React.js</h1>:null
            }
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>toggleValue(false)} >Hide Heading</button>
            <button onClick={()=>toggleValue(true)} >Show Heading</button>
            <hr/>
            {
                data?<h1>Second Custom Hook in React.js</h1>:null
            }
            <button onClick={setData}>Toggle Heading</button>
            <button onClick={()=>setData(false)} >Hide Heading</button>
            <button onClick={()=>setData(true)} >Show Heading</button>
            <hr/><hr/>
        </div>
    )

}
export default UseToggle;