import ContextDataSubjectSpecific from "./ContextDataSubjectSpecific";

const ContextDataSubjects = () => {
    return (
        <div style={{backgroundColor: "red", padding: "20px", borderRadius: "10px", margin: "20px", border: "1px solid black"}}>
            <h1>Context Data Subjects</h1>
            <p>This is a context data subjects</p>
            <ContextDataSubjectSpecific />
        </div>
    )
}
export default ContextDataSubjects;