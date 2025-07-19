const Wrapper = ({ children = "New Admin", color = "blue" }) => {
  console.log('children:', children);

  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px', borderRadius: '10px', color }}>
      <hr />
      <h1>Wrapper Component</h1>
      <h2>Hi,</h2>
      {children}
      <hr />
    </div>
  );
};

export default Wrapper;
