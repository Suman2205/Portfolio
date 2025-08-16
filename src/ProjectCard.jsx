import './ProjectCard.css';
export default function ProjectCard({imgLink,title,content,link}){
    return(
        <div className="col">
            <div className="card col" style={{textAlign:'start', height:'25rem', paddingLeft:'1rem', paddingRight:'1rem'}}>
                <img src={imgLink}  className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                </div>
                <a href={link} style={{textDecoration:'none', margin:'1rem'}}><i class="fa-solid fa-up-right-from-square"></i>&nbsp;Live Demo</a>
            </div>
        </div>
    )
}