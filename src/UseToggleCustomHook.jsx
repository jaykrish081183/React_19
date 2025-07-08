import { useState } from "react";
const UseToggleCustomHook = (defaultValue) => {
    const [isOpen, setIsOpen] = useState(defaultValue);
    const toggleValue = (value) => {
        if(typeof value != 'boolean'){
            setIsOpen(!isOpen);
        }else{
            setIsOpen(value);
        }
    }
    return [isOpen, toggleValue];
}
export default UseToggleCustomHook;