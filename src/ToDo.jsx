const fruit = () => {
        alert("Fruits Clicked outside ToDo");
    }

function ToDo(){
    const name = 'Jayesh Patel';
    const nameArray = ['Jayesh Patel', 'John Doe', 'Jane Smith'];
    function call(){
        alert("To-Do List Clicked");
        // return "hello";
    }
    function sum(a, b) {
        return a + b;
    }
    // const fruit = () => {
    //     alert("Fruits Clicked inside ToDo");
    // }

    const vegetables = (name) => {
        alert(name);
    }
    const animals = () => {
        alert("Animals Clicked");
    }
    return (
        <div className="todo">
            <h1>To-Do List</h1> 
            <p>This is the to-do list page.</p>
            <ul>
                <li>Learn React</li>
                <li>Build a To-Do App</li>
                <li>Deploy the App</li> 
            </ul>
            <h1>{name}</h1>
            <h1>{sum(30,55)}</h1>
            <button onClick={fruit}>Fruit</button>
            <button onClick={call}>Click Me</button>
            <button onClick={()=>vegetables('Tomato')}>Tomato</button>
            <button onClick={()=>vegetables('Carrot')}>Carrot</button>
            <ul>
                {nameArray.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
            </ul>
        </div>
    );
}

export default ToDo;

