import { useState } from "react";
import { SubjectContext } from "./ContextData";
import ContextDataCollege from "./ContextDataCollege";

const ContextAPIData = () => {
    const [subject, setSubject] = useState("");

    return (
        <div style={{backgroundColor: "orange", padding: "20px", borderRadius: "10px", margin: "20px", border: "1px solid black"}}>
            <SubjectContext.Provider value={subject}>
                <h1>Context API Data</h1>
                <ContextDataCollege />
            </SubjectContext.Provider>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="">Select Subject</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Maths">Maths</option>
                <option value="Science">Science</option>
                <option value="Social Science">Social Science</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
            </select>
            <button onClick={() => setSubject("")}>Clear</button>
        </div>
    )
}
export default ContextAPIData;
