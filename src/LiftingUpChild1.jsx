const LiftingUpChild1 = ({setName, setEmail, setPassword}) => {
    return (
        <div>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
    )
}
export default LiftingUpChild1;