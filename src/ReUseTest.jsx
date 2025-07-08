const ReUseTest = (user) => {    
    return (
        <div style={{border: "5px solid green", padding: "10px", margin: "10px", width: "300px", textAlign: "center", borderRadius: "10px" }}>
            <h2>Name: {user.user.name}</h2>
            <p>Age: {user.user.age}</p>
            <p>Email: {user.user.email}</p>
        </div>
    );
}
export default ReUseTest;