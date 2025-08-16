import './HomeContent.css';
export default function HomeContent(){
    return(
        <div className="homeContent col" style={{textAlign:'start'}}>
            <h1>Hi, I'm Suman</h1>
            <h2>Full Stack Web Developer</h2>
            <p>I’m a Full Stack Web Developer specializing in the MERN stack, passionate about building dynamic, user-focused applications. Alongside web development, I actively solve Data Structures & Algorithms problems to sharpen my problem-solving skills, with the goal of becoming a Software Development Engineer.</p>
            <div className="f-info-socials mt-3">
                <a href="https://github.com/Suman2205" target="_blank" style={{marginRight:'1rem'}}><img src='/github.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://www.instagram.com/be_genuine_one" target="_blank" style={{marginRight:'1rem'}}><img src='/instagram.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://www.linkedin.com/in/suman-mondal-197a5831b/" target="_blank" style={{marginRight:'1rem'}}><img src='/linked.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://leetcode.com/u/sumon_22_125" target="_blank" style={{marginRight:'1rem'}}><img src='/leetcode.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
            </div>
        </div>
    )
}