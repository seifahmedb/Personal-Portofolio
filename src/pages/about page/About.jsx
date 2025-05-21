import NavBar from "../../components/navBar/NavBar";
import photo from "./msse.jpg"
import Logo from "../../components/logo";

import "./aboutStyle.css"

const About = () => {
    return (
        <div>
            
            <NavBar />
            <Logo />
            <div className="aboutContainer-style">
                <div>
                    <div className="title-style">
                        <h1>ABOUT ME</h1>
                    </div>
                    <p>
                        I am a motivated Communication and Information Engineering student, passionate about technology and innovation. My experience as a sales representative has honed my skills in communication, relationship building, and problem-solving, enabling me to understand and address customer needs effectively.
                    </p>
                    <p>
                    With a growing foundation in front-end development and engineering concepts, I am eager to bridge the gap between technical expertise and customer satisfaction. I aim to leverage my diverse skill set to deliver impactful solutions and create value in dynamic environments.
                    </p>
                    <p>       
                    Always open to learning, collaboration, and exploring new opportunities.
                    </p>
                </div>
                <div className="img-container">
                    <img className="img-style" src={photo} alt="my-img" />
                </div>
            </div>
        </div>
    );
};

export default About;