import { useState } from "react";
const UpdateObjectInState = () => {
    const [user, setUser] = useState({
        name: 'Mohan',
        address: {
            city: 'New York',
            country: 'USA'
        },
    });
    const handleUpdateName = (name) => {
        setUser({...user, name: name});
    }
    const handleUpdateCity = (city) => {
        setUser({...user, address: {...user.address, city: city}});
    }
    const handleUpdateCountry = (country) => {
        setUser({...user, address: {...user.address, country: country}});
    }
    return (
        <div>
            <h2>Update Object in State</h2>
            <input type="text" placeholder="Enter Name" onChange={(event)=>handleUpdateName(event.target.value)} />
            <input type="text" placeholder="Enter City"  onChange={(event)=>handleUpdateCity(event.target.value)} />
            <input type="text" placeholder="Enter Country" onChange={(event)=>handleUpdateCountry(event.target.value)} />
            <h2>Name: {user.name}</h2>
            <h2>City: {user.address.city}</h2>
            <h2>Country: {user.address.country}</h2><hr/>
        </div>
    )
}
export default UpdateObjectInState;