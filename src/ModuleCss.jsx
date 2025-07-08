import style from './css/ModuleCss.module.css';

const ModuleCss = () => {
    return (
        <div>
        <h1 className={style.heading1}>User Profile</h1>
        <p>This is a user profile component with CSS styling.</p>
        <div className={style.divStyle}>
                <div className={style.cardStyle}>
                    <img src="../public/img_avatar.png" alt="Placeholder" className={style.imgStyle} />
                    <h2 className={style.textColor}>Jayesh Patel</h2>
                    <h2 className={style.textColor}>Software Developer</h2>
                </div>
            </div><hr/>
        </div>
    );
}

export default ModuleCss;