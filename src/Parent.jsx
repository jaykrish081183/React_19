import ParentChild from "./ParentChild";
const Parent = () => {
    const displayName = (name) => {
        alert(name);
    }
    return (
        <div>
            <h1>Call Parent component frunction from child component</h1>
            <ParentChild displayName={displayName} name='John' />
            <ParentChild displayName={displayName} name='Pater' />
            <ParentChild displayName={displayName} name='Jane' />
        </div>
    )
}
export default Parent;