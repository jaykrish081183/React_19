import { useReducer } from "react";

const useReducerHook = () => {
    const emptyData = {
        name: '',
        password: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }   

    const reducer = (state, action) => {
        console.log(action);
        return { ...state, [action.type]: action.payload };
    }

    const [state, dispatch] = useReducer(reducer, emptyData);

    return (
        <div>
            <h1>useReducer Hook Example</h1>
            <form>
                <input type="text" onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} placeholder="Enter Name" /><br /><br />
                <input type='password' onChange={(e) => dispatch({ type: 'password', payload: e.target.value })} placeholder="Enter Password" /><br /><br />
                <input type="text" onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} placeholder="Enter Email address" /><br /><br />
                <input type="number" onChange={(e) => dispatch({ type: 'age', payload: e.target.value })} placeholder="Enter Age" /><br /><br />
                <input type="text" onChange={(e) => dispatch({ type: 'city', payload: e.target.value })} placeholder="Enter city" /><br /><br />
                <input type="text" onChange={(e) => dispatch({ type: 'country', payload: e.target.value })} placeholder="Enter country" /><br /><br />
            </form>
            <h1>Form Data</h1>
            <p>Name: {state.name}</p>
            <p>Password: {state.password}</p>
            <p>Email: {state.email}</p>
            <p>Age: {state.age}</p>
            <p>City: {state.city}</p>
            <p>Country: {state.country}</p><hr/>
        </div>
    );

}

export default useReducerHook;