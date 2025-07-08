const Wrapper = ({children="New Admin", color="blue"}) => {
    return (
        <div style={{border: '2px solid green', padding: '10px', margin: '10px', borderRadius: '10px', color: color}}>
            <hr />
            <h1>Wrapper Component</h1>
            <h1>Hi, {children}</h1>
        </div>
    )
}

export default Wrapper;