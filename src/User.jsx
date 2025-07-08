function User(){
    return (
        <div>
        <h1>User Profile</h1>
        <p>This is the user profile page.</p>
        <FruitList />
        <ColorList />
        </div>
    );
}

export default User;

function FruitList() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}
function ColorList() {
    const colors = ['Red', 'Green', 'Blue'];
    return (
        <ul>
            {colors.map((color, index) => (
                <li key={index}>{color}</li>
            ))}
        </ul>
    );
}   
export function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
        </div>
    );
}
export function Setting() {
    return (
        <div>
            <h1>Settings Page</h1>
            <p>This is the settings page.</p>
        </div>
    );
}   
