import NavBar from "../../components/navBar/NavBar";
import Logo from "../../components/logo";
import { useEffect , useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./contactStyle.css"



const ContactPage = () => {

    const [caption, setCaption] = useState('-150%');
    useEffect(() => {
        setCaption('0');
    } , []);

    return (
        <div> 
            <NavBar />
            <Logo />
            <div style={{ transform: `translateY(${caption})` , transition: 'transform 0.7s ease-in-out' }} className="caption">
                <h1>LETS WORK TOGETHER!</h1>
            </div>
            <footer>
                
            </footer>
            <div className="contactBox-style">
                 <div className='divz-style'>

                    <div className="contact-item">
                        <a href="https://github.com/Seifahmedb" target="_blank" rel="noopener noreferrer">
                            <button className="buttonz-style">
                            <FontAwesomeIcon icon={faGithub} className="logoz-style" />
                            </button>
                        </a>
                        <p className="icon-label">GitHub</p>
                    </div>

                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/seiftalaat" target="_blank" rel="noopener noreferrer">
                            <button className="buttonz-style">
                            <FontAwesomeIcon icon={faLinkedin} className="logoz-style" />
                            </button>
                        </a>
                        <p className="icon-label">LinkedIn</p>
                    </div>

                    <div className="contact-item">
                        <a href="mailto:sb3awy2003@gmail.com">
                            <button className="buttonz-style">
                            <FontAwesomeIcon icon={faEnvelope} className="logoz-style" />
                            </button>
                        </a>
                        <p className="icon-label">Email</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default ContactPage;