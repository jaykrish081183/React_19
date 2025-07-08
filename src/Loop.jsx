import { useState } from "react";
const LoopComponent = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);
    const userData = [
        { name: "Jayesh Patel", age: 30, email: "jayesh@test.com", id: 1 },
        { name: "Jignesh Patel", age: 32, email: "jignesh@test.com", id: 2 },
        { name: "Kishan Patel", age: 28, email: "kish@test.com", id: 3 },
        { name: "Ketan Patel", age: 26, email: "ketan@test.com", id: 4 }
    ];
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Looping through an Array</h1>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default LoopComponent;