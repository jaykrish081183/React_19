import { useOptimistic, useState,  useEffect } from "react";

const UseOptimisticHook = () => {

    const [skills, setSkills] = useState([]);
    const [name, setName] = useState([]);
    const [optsKills, setOptSkills] = useOptimistic(skills)

    useEffect(() => {
        getSkills()
    }, []);

    const getSkills = async () => {
        let resp = await fetch('http://localhost:3000/skills');
        resp = await resp.json();
        setSkills(resp)
    }

    const addSkill = async (event) => {
        // event.preventDefault()
        const id = Math.random() * 10000000;

        setOptSkills((prev) => [...prev, { name: name + '-loading', id }])

        let resp = await fetch('http://localhost:3000/skills', {
            method: "post",
            body: JSON.stringify({ name, id })
        });
        resp = await resp.json();
        console.log("apple");
        if (resp) {
            getSkills();
        }
    }

    return (
        <div>
            <form action={addSkill}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="enter skill" />
                <button>Add </button>
            </form>
            {
                optsKills.map((item) => (
                    <div key={item.id} >{item.name}</div>
                ))
            }
        </div>
    )
}

export default UseOptimisticHook;