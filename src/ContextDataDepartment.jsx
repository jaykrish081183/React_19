import ContextDataTeachers from "./ContextDataSubjects";

const ContextDataDepartment = () => {
    return (
        <div style={{backgroundColor: "lightgreen", padding: "20px", borderRadius: "10px", margin: "20px", border: "1px solid black"}}>
            <h1>Context Data Department</h1>
            <p>This is a context data department</p>
            <ContextDataTeachers />
        </div>
    )
}
export default ContextDataDepartment;