const ObjectProp = ({user}) => {
    return (
        <div>
            <hr />
            <p>User name: {user.name}</p>
            <p>User age: {user.age}</p>
            <p>User city: {user.city}</p>
            <p>User country: {user.country}</p>
            <p>User hobbies: {user.hobbies}</p>
        </div>
    );
}

export default ObjectProp;