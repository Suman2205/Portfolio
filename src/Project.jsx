import ProjectCard from "./ProjectCard";
import './Project.css';
export default function Project(){
    let images=["/ProjectImg5.png","/ProjectImg3.png","/ProjectImg1.jpg","/ProjectImg6.png","/ProjectImg7.png","/ProjectImg4.png"];
    let links=["https://studyadda.onrender.com/","https://suman2205.github.io/PerfectGuessGame/","https://chatapplication-6e1x.onrender.com","https://majorproject-3ysx.onrender.com","https://portfolio-mxzw.onrender.com/","https://suman2205.github.io/QuizApplication/"];
    let titles=["StudyAdda","Perfect Guess Game","ChatNova","WanderLust","Portfolio","Interactive Quiz Application"];
    let contents=["StudyAdda is a dynamic, community-powered academic platform that centralizes curated notes, past papers, practical resources, and books — empowering students to contribute, collaborate, and earn recognition within a structured digital ecosystem.",
        "A number guessing game that challenges logic and luck within limited attempts, offering fun while boosting problem-solving skills.",
        "A real-time group chat app with unique room IDs, auto-reconnect, message sync, and secure history deletion.",
        "A travel web app to explore, create, and review stays, featuring authentication and smooth image handling.",
        "A responsive React + Bootstrap portfolio showcasing my projects, skills, and achievements with clean design and easy navigation. Built to provide a quick snapshot of my work and growth as a developer.",
        "A multi-category quiz app with real-time scoring and instant feedback for an engaging learning experience.",
    ];
    return(
        <div id="projects" className="project">
            <h2>Featured Projects</h2>
            <h5>A Collection of my recent work showcasing different skills and technologies</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3" style={{ marginTop: "25px" }}>
                {images.map((image,index)=>(
                    <div className="col d-flex">
                        <ProjectCard imgLink={image} link={links[index]} title={titles[index]} content={contents[index]}/>
                    </div>

                ))}
            </div>
            
        </div>
    )
}