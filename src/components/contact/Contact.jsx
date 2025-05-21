import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBackspace, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css'
import Logo from '../logo';

import { Link } from 'react-router-dom';




const Contact = () => {

    return (
        <div className='div-style'>
            <a href="https://github.com/Seifahmedb" target="_blank" rel="noopener noreferrer">
                <button className='button-style'>
                    <FontAwesomeIcon icon={faGithub} className='logo-style' />
                </button>
            </a>
            <a href="https://www.linkedin.com/in/seiftalaat" target="_blank" rel="noopener noreferrer">
                <button className='button-style'>
                    <FontAwesomeIcon icon={faLinkedin} className='logo-style' />
                </button>
            </a>

            <a href="mailto:sb3awy2003@gmail.com" >
                <button className='button-style'>
                    <FontAwesomeIcon icon={faEnvelope} className='logo-style' />
                </button>
            </a>

        </div>
    );
};

export default Contact;
