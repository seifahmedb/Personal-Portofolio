import  "./navBar.css"
import { useNavigate , useLocation} from 'react-router-dom';




const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };

    return (
            <nav className="nav-bar">
                <button onClick={() => handleClick('/About')} className={location.pathname === '/About' ? "active-button" : "nav-button"} >About Me</button>
                <button onClick={() => handleClick('/skillsPage')} className={location.pathname === '/skillsPage' ? "active-button" : "nav-button"}>Skills</button>
                <button onClick={() => handleClick('/ProjectsPage')} className={location.pathname === '/ProjectsPage' ? "active-button" : "nav-button"} >Projects</button>
                <button onClick={() => handleClick('/ContactPage')} className={location.pathname === '/ContactPage' ? "active-button" : "white-button"}>Contact Me</button>
            </nav>
    );
}
       

export default NavBar;