import NavBar from "../../components/navBar/NavBar";
import Logo from "../../components/logo";

// photos import
import movie from "./movie.mp4"
import shoes from "./shoes.png"
import car from "./car.png"

import "./projectsPage.css"
const ProjectsPage = () => {
    return (
        <div className="App"> 
            <NavBar /> 
            <Logo /> 
            
            <div className="projects-container">
                <div className="project-item">
                    <h2>MOVIE APP</h2>
                    <video className="video-style" autoPlay controls>
                        <source src={movie} type="video/mp4" />
                    </video>
                </div>

                <div className="project-item">
                    <h2>FOOTWEAR</h2>
                    <img className="proj-img-style" src={shoes} alt="img" />
                </div>

                <div className="project-item">
                    <h2>CAR SERVICE</h2>
                    <img className="proj-img-style" src={car} alt="img" />
                </div>

            </div>
        </div>
    );
};

export default ProjectsPage;