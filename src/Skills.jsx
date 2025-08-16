import SkillContainer from "./SkillContainer";
import { useState } from "react";
import './Skills.css';
export default function Skill(){
    let fields=[
        [{"title":"HTML","skill":"html.png"},{"skill":"css-3.png","title":"CSS"},{"skill":"js.png","title":"JavaScript"},{"skill":"atom.png","title":"React"},{"skill":"tailwind-css.png","title":"Tailwind CSS"},{"skill":"bootstrap.png","title":"Bootstrap"}],
        [{"title":"Node JS","skill":"node-js.png"},{"skill":"express.png","title":"Express"},{"skill":"mysql.png","title":"My SQL"},{"skill":"mongodb.png","title":"Mongo DB"},{"skill":"api.png","title":"REST APIs"},{"skill":"socket.png","title":"Socket.io"}],
        [{"title":"Git","skill":"git.png"},{"skill":"github.png","title":"GitHub"},{"skill":"vscode.png","title":"VS Code"},{"skill":"compass.png","title":"Compass"},{"skill":"postman.png","title":"Postman"},{"skill":"figma.png","title":"Figma"}],
        [{"title":"C","skill":"c.png"},{"skill":"c++.png","title":"C++"},{"skill":"js.png","title":"Javascript"},{"skill":"java.png","title":"Java"},{"skill":"python.png","title":"Python"}]
    ];
    let headings=["Frontend","Backend","Tools","Tech Skills"]
    let [i,setI]=useState(0);
    let setFun=()=>{
        setI(i+1);
    }
    return(
        <div id="skills" className="skill">
            <h2>Skills & Technologies</h2>
            <h5 style={{opacity:0.8}}>Here are the technologies and tools I work to bring ideas to life</h5>
            <div className="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1">
                {
                    fields.map((field,index)=>(<SkillContainer key={index} field={field} heading={headings[index]}></SkillContainer>))
                }
            </div>
            
        </div>
    )
}