import { useId } from "react";
const UserIDHook = () => {
    const id = useId();
    return (
        <div>
            <h1>UserIDHook Example</h1>
            <input type="text" id={id+"name"} placeholder="Enter Name" /><br/> <br/>
            <input type="email" id={id+"email"} placeholder="Enter Email" /><br/> <br/>
            <input type="password" id={id+"password"} placeholder="Enter Password" /><br/> <br/>
            <button>Submit</button><hr/>
        </div>
    );
};
export default UserIDHook;