import logo from '../logo.png';
import { useNavigate } from 'react-router-dom';

const logoStyle = {
    width: '45px',
    height: '45px',
    marginLeft: '100px',
    marginBottom: '-20px',
    marginTop: '-60px',
    top: '20px',
    position: 'sticky',
    
}

const buttonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
}




const Logo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }


    return (
        <div style={logoStyle}>
            <button style={buttonStyle} onClick={handleClick}>
            <img src={logo} alt="logo" />
            </button>
        </div>
    );
}

export default Logo