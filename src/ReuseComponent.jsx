import { useState } from "react";
import ReUseTest from "./ReUseTest";

const ReuseComponent = () => {
    const userData = [
        { name: "Jayesh Patel", age: 30, email: "jayesh@test.com", id: 1 },
        { name: "Jignesh Patel", age: 32, email: "jignesh@test.com", id: 2 },
        { name: "Kishan Patel", age: 28, email: "kish@test.com", id: 3 },
        { name: "Ketan Patel", age: 26, email: "ketan@test.com", id: 4 }
    ];
    return (
        <div >
            <h1>Reuse component in Loop</h1>
            {
                userData.map((user) => (
                    <div key={user.id}>
                        <ReUseTest user={user} />
                    </div>
                ))
            }
            <hr />
        </div>
    );
}
export default ReuseComponent;