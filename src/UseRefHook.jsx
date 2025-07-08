import { useRef } from "react";
const UseRefHook = () => {
    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const inputHandler = () => {
        // console.log(inputRef)
        inputRef.current.focus();
        inputRef.current.style.color='red';
        inputRef.current.placeholder='Enter Password';
        // inputRef.current.value="123456";
    }
    const toggleHandler = () => {
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display='none';
        }else{
            inputRef.current.style.display='inline';
        }
    }
    const h1Handler = () => {        
        h1Ref.current.style.color='orange';
    }
    return (         
        <div>
            <h1 ref={h1Ref}>useRef Example</h1>
            <button onClick={h1Handler}>H1 Handler</button>
            <button onClick={toggleHandler}>Toggle</button>
            <input ref={inputRef} type="text" placeholder="Enter your name" />
            <button onClick={inputHandler}>Focus on Input Field</button>
        </div>
    );
}
export default UseRefHook;