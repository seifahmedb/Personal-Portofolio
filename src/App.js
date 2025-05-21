import React from "react";
import './App.css';

// for routing
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import pages
import HomePage from "./pages/homePage/HomePage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import About from "./pages/about page/About";
import SkillsPage from "./pages/skillsPage/skillsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";




const App = () => {
    return (
        <div className="App">

          <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/About" element={<About />} />
                <Route path="/skillsPage" element={<SkillsPage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/ProjectsPage" element={<ProjectsPage />} />
                
            </Routes>
         </BrowserRouter>


        </div>
    );
};

export default App;