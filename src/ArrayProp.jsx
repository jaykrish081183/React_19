const ArrayProp = ({user}) => {
    return (
        <div>
            <hr />
            {user.map((u, index) => (
                <div key={index}>
                    <hr />
                    <p>User name: {u.name}</p>
                    <p>User age: {u.age}</p>
                    <p>User city: {u.city}</p>
                    <p>User country: {u.country}</p>
                    <p>User hobbies: {u.hobbies.join(', ')}</p>
                </div>
            ))}
        </div>
    );
}

export default ArrayProp;