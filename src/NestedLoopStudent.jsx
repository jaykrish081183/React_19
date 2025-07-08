function NestedLoopStudent({ students, departments }) {
    return (
        <div >
            {students.map((student, index) => (
                <div key={index} style={{ padding: '30px', border: '2px solid #ccc', marginTop: '10px' }}>
                    <h4>Student {index + 1}</h4>
                    <ul>
                        <li>Name: {student.name}</li>
                        <li>Age: {student.age}</li>
                        <li>Email: {student.email}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default NestedLoopStudent;