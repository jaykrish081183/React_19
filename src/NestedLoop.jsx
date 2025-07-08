import NestedLoopStudent from "./NestedLoopStudent";
import NestedLoopDepartment from "./NestedLoopDepartment";

const NestedLoop = () => {
    const collegeData = [
        {
            name: "IIT",
            city: "Delhi",
            departments: [
                { name: "Computer Science", courses: ["Data Structures", "Algorithms"] },
                { name: "Electrical Engineering", courses: ["Circuit Theory", "Electromagnetics"] }
            ],
            students: [
                { name: "Alice", age: 20, email: "alice@gmail.com" },
                { name: "Bob", age: 22, email: "bob@gmail.com" },
                { name: "Charlie", age: 21, email: "charlie@gmail.com" },
                { name: "David", age: 23, email: "david@gmail.com" }
            ]
        },
        {
            name: "IISc",
            city: "Bangalore",
            departments: [
                { name: "Physics", courses: ["Quantum Mechanics", "Thermodynamics"] },
                { name: "Chemistry", courses: ["Organic Chemistry", "Inorganic Chemistry"] }
            ],
            students: [
                { name: "Eve", age: 24, email: "eve@gmail.com" },
                { name: "Frank", age: 25, email: "frank@gmail.com" },
                { name: "Grace", age: 23, email: "grace@gmail.com" },
                { name: "Heidi", age: 22, email: "heidi@gmail.com" }
            ]
        },
        {
            name: "BITS",
            city: "Pilani",
            departments: [
                { name: "Mechanical Engineering", courses: ["Thermodynamics", "Fluid Mechanics"] },
                { name: "Civil Engineering", courses: ["Structural Analysis", "Geotechnical Engineering"] }
            ],
            students: [
                { name: "Ivan", age: 21, email: "ivan@gmail.com" },
                { name: "Judy", age: 20, email: "judy@gmail.com" },
                { name: "Karl", age: 22, email: "karl@gmail.com" },
                { name: "Leo", age: 23, email: "leo@gmail.com" }
            ]
        }
    ]
    return (
        <div >
            <h1>Nested Loop Example</h1>
            {collegeData.map((college, index) => (
                <div key={index} style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px', textAlign: 'left' }}>
                    <h2 >College Name: <span style={{ color: 'blue' }}>{college.name}</span> </h2>
                    <h2 >College City: <span style={{ color: 'blue' }}>{college.city}</span> </h2>
                    <h2 >Students: </h2>                    
                    <NestedLoopStudent students={college.students} departments={college.departments} />
                    <NestedLoopDepartment departments={college.departments} />
                </div>
            ))}
        </div>
    )
}
export default NestedLoop;