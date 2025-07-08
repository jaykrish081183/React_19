import { useState } from "react";
const InlineCSS = () => {
    const cardStyle = {
        backgroundColor: 'lightblue',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        margin: '10px',
        width: '200px',
        Wrapper: 'flex',
    };
    const [grid, setGrid] = useState(true);
    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '24px' }}>Inline CSS Example</h1>
            <button onClick={() => setGrid(!grid)} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', margin: '10px' }}>
                Toggle Grid/List View
            </button>
            <div style={{ display: grid?'flex':'block', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: 'darkblue' }}>Jayesh Patel</h2>
                    <p style={{ color: 'green' }}>Software Engineer</p>
                </div>                
            </div><hr/>
        </div>
    );
}

export default InlineCSS;