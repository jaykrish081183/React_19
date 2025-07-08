import { useState } from "react";
import LiftingUpChild1 from "./LiftingUpChild1";
import LiftingUpChild2 from "./LiftingUpChild2";

const LiftingUpState = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>Lifting Up State</h2>
            <LiftingUpChild1 setName={setName} setEmail={setEmail} setPassword={setPassword}/>
            <LiftingUpChild2 name={name} email={email} password={password}/>
            <hr/>
        </div>
    )
}
export default LiftingUpState;