import { useRef } from "react";
const UncontrolledComponent = () => {
    const userRef = useRef(null);
    const passRef = useRef(null);
    const handleform = (event) => {
        event.preventDefault();
        const user = document.querySelector("#user").value;
        const pass = document.querySelector("#pass").value;
        console.log(user, pass);
    }
    const handleformRef = (event) => {
        event.preventDefault();
        const user = userRef.current.value;
        const pass = passRef.current.value;
        console.log(user, pass);        
    }
    return (
        <div>
            <form action="" method="post" onSubmit={handleform}>
                <h1>Uncontrolled Component</h1>
                <input type="text" id="user" placeholder="Enter User Name" /><br/> <br/>
                <input type="text" id="pass" placeholder="Enter Password" /><br/> <br/>
                <button>Submit</button>
            </form><hr/><hr/>
            <form action="" method="post" onSubmit={handleformRef}>
                <h1>Uncontrolled Component With useRef</h1>
                <input type="text" ref={userRef} id="userRef" placeholder="Enter User Name" /><br/> <br/>
                <input type="text" ref={passRef} id="passRef" placeholder="Enter Password" /><br/> <br/>
                <button>Submit</button>
            </form><hr/><hr/>
        </div>
    )
}
export default UncontrolledComponent;