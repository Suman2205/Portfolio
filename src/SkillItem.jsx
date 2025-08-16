import './skillItem.css';
export function SkillItem({skill,title}){
    return(
        <div className="skillItem col">
            <span className="skillItemImg">
                <img src={skill}></img>
                <h6>{title}</h6>
            </span>
            
        </div>
    )
}