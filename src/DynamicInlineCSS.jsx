import { useState } from "react";
const DynamicInlineCSS = () => {
    const [cardStyle, setCardStyle] = useState({
        backgroundColor: 'lightblue',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '250px',
    });
    const [textColor, setTextColor] = useState('green');

    function updateCardStyle(bgColor, textColor) {
        setCardStyle({...cardStyle,backgroundColor: bgColor});
        setTextColor(textColor);
    }

    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '24px' }}>Dynamic Inline CSS Example</h1>
            <button onClick={() => updateCardStyle('darkblue','green')} style={{backgroundColor:'blue', color:'white', padding:'15px', margin:'10px'}} >Blue</button>    
            <button onClick={() => updateCardStyle('green','cyan')} style={{backgroundColor:'green', color:'white', padding:'15px', margin:'10px'}}>Green</button>    
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <div style={cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" style={{ width: '100px', margin: '10px', borderRadius: '50%' }} />
                    <h2 style={{ color: textColor}}>Jayesh Patel</h2>
                    <h2 style={{ color: textColor}}>Software Developer</h2>
                </div>
            </div><hr/>
        </div>
    );
}
export default DynamicInlineCSS;