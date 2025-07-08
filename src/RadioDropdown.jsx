import { useState } from "react";

const RadioDropdown = () => {
    const [gender, setGender] = useState("other");
    const [dropdown, setDropdown] = useState("");
    return (
        <div>
            <h1>Select Gender</h1>
            <form>
                <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={"male"} checked={gender == 'male'} id="male" />
                <label htmlFor="male">Male</label><br />
                <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={"female"} checked={gender == 'female'} id="female" />
                <label htmlFor="female">Female</label><br />
                <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" value={"other"} checked={gender == 'other'} id="other" />
                <label htmlFor="other">Other</label><br />
                <h2>Selected Radio: {gender}</h2>

                <h1>Select city</h1>
                <select defaultValue={"Melbourne"} onChange={(e) => setDropdown(e.target.value)}>
                    <option value="">Select city</option>
                    <option value="Truganina">Truganina</option>
                    <option value="Tarneit">Tarneit</option>
                    <option value="Melbourne">Melbourne</option>
                </select>
                <h2>Selected Dropdown: {dropdown}</h2>
            </form>
        </div>
    )
}

export default RadioDropdown;