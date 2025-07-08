import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);        
    }, []);
    
    return (
        <div>
            <button style={{color:color,backgroundColor:'black'}}>{new Date().toLocaleTimeString()}</button>
        </div>
    )
}
export default Clock;