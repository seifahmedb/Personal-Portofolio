import NavBar from '../../components/navBar/NavBar';
import Name from '../../components/Name';
import JobName from '../../components/JobName';
import Contact from '../../components/contact/Contact';
import Logo from '../../components/logo';
import MyPhoto from '../../components/myPhoto/myPhoto';

import { useEffect } from 'react';

import './homePageStyle.css';

const HomePage = () => {
    useEffect(() => {
        // Add home background class when component mounts
        document.body.classList.add('home-bg');
        
        // Cleanup function - removes home background when leaving page 
        return () => {
          document.body.classList.remove('home-bg');
        };
      }, []);

    return (
        <div className="App">
            <NavBar />
            <Logo />
            <Name />
            <JobName />
            <Contact />
            <MyPhoto />
        </div>
    );
};

export default HomePage;