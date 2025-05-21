import NavBar from "../../components/navBar/NavBar";
import Logo from "../../components/logo";
import "./skillsPage.css"

// icons import
import htmlIcon from "./icons/html.png"
import cssIcon from "./icons/css.png"
import jsIcon from "./icons/js.webp"
import gitIcon from "./icons/git.png"
import cppIcon from "./icons/cpp.png"
import pyhtonIcon from "./icons/python.png"
import reactIcon from "./icons/react.png"
import bootsIcon from "./icons/boots.png"
import mongoIcon from "./icons/mongo.png"
import hubIcon from "./icons/hub.png"





const SkillsPage = () => {
    return (
        <div>
            <NavBar />
            <Logo />
            <div className="title-style">
                <h1>MY SKILLS</h1>
            </div>
            <div >
               
                <div className="containerStyle">
                    <div className="item"><img src={htmlIcon} alt="html" />HTML5</div>
                    <div className="item"><img src={cssIcon} alt="css" />CSS3</div>
                    <div className="item"><img src={jsIcon} alt="js" />JS</div>
                    <div className="item" ><img src={reactIcon} alt="react" />REACT</div>
                    <div className="item"><img src={bootsIcon} alt="boots" />BOOTSTRAP</div>
                 </div>
                <div className="containerStyle">
                    <div className="item" ><img src={gitIcon} alt="git" />GIT</div>
                    <div className="item" ><img src={cppIcon} alt="cpp" />C++</div>
                    <div className="item" ><img src={pyhtonIcon} alt="python" />PYTHON</div>
                    <div className="item"><img src={mongoIcon} alt="mongo" />MONGODB</div>
                    <div className="item"><img src={hubIcon} alt="hub" />GITHUB</div>
                    
                </div>

              

                
            </div>

        </div>
    );
};

export default SkillsPage;