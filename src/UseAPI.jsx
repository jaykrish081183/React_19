import { use } from "react";
const UseAPI = ({ userResource }) => {
    const usersData = use(userResource);
    return (
        <div>
            <table border={1} cellPadding={10} cellSpacing={0} align="center">
                <thead>
                    <tr style={{ backgroundColor: "black", color: "white" }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user) => (
                            <tr key={user.id} style={{ backgroundColor: user.id % 2 === 0 ? "lightgray" : "white", borderBottom:"1px solid black" }}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
export default UseAPI;
