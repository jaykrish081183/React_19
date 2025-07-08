import { SubjectContext } from "./ContextData";
import { useContext } from "react";

const ContextDataSubjectSpecific = () => {
    const subject = useContext(SubjectContext);
    return (
        <div style={{backgroundColor: "green", padding: "20px", borderRadius: "10px", margin: "20px", border: "1px solid black"}}>
            <h1>Context Data Specific Subjects</h1>
            <p>This is {subject} subjects</p>         
        </div>
    )
}
export default ContextDataSubjectSpecific;