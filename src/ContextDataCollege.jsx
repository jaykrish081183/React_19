import ContextDataDepartment from "./ContextDataDepartment";

const ContextDataCollege = () => {
    return (
        <div style={{backgroundColor: "lightblue", padding: "20px", borderRadius: "10px", margin: "20px", border: "1px solid black"}}>
            <h1>Context Data College</h1>
            <p>This is a context data college</p>
            <ContextDataDepartment />
        </div>
    )
}
export default ContextDataCollege;