import { SkillItem } from "./SkillItem";
import './SkillContainer.css';

export default function SkillContainer({field,heading}){
    
    return(
        <div className="card skillContainer" style={{backgroundColor:'white'}}>
            <h3>{heading}</h3>
            <div className="row row-cols-3">
            {
                field.map((skill,index)=>(<SkillItem key={index} skill={skill.skill} title={skill.title}></SkillItem>))
            }
            </div>   
        </div>
    )
}