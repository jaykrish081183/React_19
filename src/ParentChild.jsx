const ParentChild = ({displayName,name}) => {
    return (
        <div>
            <button onClick={() => displayName(name)}>{name}</button>
        </div>
    )
}
export default ParentChild;