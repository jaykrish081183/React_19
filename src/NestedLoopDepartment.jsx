function NestedLoopDepartment({ departments }) {
    return (
        <div >            
            <h2>Departments: </h2>
            {departments.map((department, index) => (
                <div key={index} style={{ padding: '30px', border: '2px solid #ccc', marginTop: '10px' }}>
                    <h4>{index + 1}: {department.name}</h4>
                    <ul>
                        {department.courses.map((course, courseIndex) => (
                            <li key={`course-${index}-${courseIndex}`}>{course}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default NestedLoopDepartment;