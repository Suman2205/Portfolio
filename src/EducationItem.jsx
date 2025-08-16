import './EducationItem.css';
export default function EducationItem({heading1,heading2,date,grade,content}){
    return(
        <div className="educationItem col">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{heading1}</h3>
                    <h5 className="card-subtitle mb-2 text-body-secondary">{heading2}</h5>
                    <h6><i className="fa-regular fa-calendar"></i>&nbsp;{date}</h6>
                    <p style={{color:"#0f1e64ff",fontWeight:"bold"}}>Grade: {grade}</p>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    )
}