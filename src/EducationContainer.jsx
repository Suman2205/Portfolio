import EducationItem from "./EducationItem";

export function EducationContainer(){
    return(
        <div className="educationContent row row-cols-1" style={{textAlign:'start'}}>
            <div><i className="fa-solid fa-graduation-cap"></i>&nbsp;<p style={{fontWeight:"bold", fontSize:"large", display:"inline"}}>Education</p></div><br></br><br></br>
            <EducationItem heading1={"Bachelor of Technology in Computer Science Engineering"} heading2={"University Institute of Engineering and Technology, KUK"} date={"2023 -2027"} grade={"currently purusing"} content={"I am pursuing a B.Tech in Computer Science and Engineering at UIET, Kurukshetra, with a strong focus on programming, algorithms, and software development through both academics and hands-on projects."}/>
            <EducationItem heading1={"Senior Secondary (Class XII) - HBSE Board"} heading2={"SMB Gita Sr. Sec. School, Kurukshetra"} date={"Apr 2022 - Mar 2023"} grade={"94.8%"} content={"I completed my Class 12th in the PCM stream from SMB Gita Sr. Sec. School, Kurukshetra, which strengthened my analytical and problem-solving skills. This foundation inspired me to pursue B.Tech in Computer Science and Engineering."}/>
        </div>
    )
}