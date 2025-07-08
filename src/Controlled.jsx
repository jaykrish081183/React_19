import { useState } from "react";

const Controlled = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h1>Controlled Component</h1>
            <form method="get" name="form">
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
                <br/><br/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" />
                <br/><br/>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" />
                <br/><br/>
                {name && <h1>Name: {name}</h1>}
                {password && <h1>Password: {password}</h1>}
                {email && <h1>Email: {email}</h1>}
                <button type="submit" className="btn">Submit</button>
                <button type="reset" onClick={() => { setName(""); setPassword(""); setEmail(""); }} className="btn">Reset</button>
            </form>
            <hr/>
            <hr/>
        </div>
    );
}

export default Controlled;