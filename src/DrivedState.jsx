import { useState } from "react";

const DrivedState = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [newUser, setNewUser] = useState('');

    const handleAddUsers = () => {
        setAllUsers([...allUsers, newUser]);
        setNewUser('');
    }

    const total_users = allUsers.length;
    const last_user = allUsers[allUsers.length-1];
    const unique_user = [...new Set(allUsers)].length;

    return (
        <div>
            <h2>Total Users: {total_users}</h2>
            <h2>Last User: {last_user}</h2>
            <h2>Unique User: {unique_user}</h2>
            <input onChange={(event)=>setNewUser(event.target.value)} value={newUser} type="text" placeholder="Enter Name" />
            <button onClick={handleAddUsers}>Add User</button>
            {
                allUsers.map((user, index)=>{
                    return <h2 key={index}>{user}</h2>
                })
            }
            <hr/><hr/>
     </div>
    )
}
export default DrivedState;