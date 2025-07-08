import { useState } from "react";
const Skills = () => {
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        if(event.target.checked) {
            setSkills([...skills, event.target.value]);
        }else{
            setSkills([...skills.filter((item) => item != event.target.value)]);
        }
    }
    return (
        <div>
            <h1>Skills</h1>
            <form>
                <input onClick={handleSkills} type="checkbox" name="php" id="php" value="PHP"/>
                <label htmlFor="PHP">PHP</label><br /><br />
                <input onClick={handleSkills} type="checkbox" name="html" id="html" value="HTML"/>
                <label htmlFor="HTML">HTML</label><br /><br />
                <input onClick={handleSkills} type="checkbox" name="css" id="css" value="CSS"/>
                <label htmlFor="CSS">CSS</label><br /><br />
                <input onClick={handleSkills} type="checkbox" name="js" id="js" value="JS"/>
                <label htmlFor="JS">JS</label><br /><br />
            </form>
            <br />
            <h2>Selected Items:</h2>
            {skills.toString() === "" ? ( <h3>No Skills Selected</h3> ) : ( <h3>{skills.toString()}</h3> )}
        </div>
    );
}
export default Skills;