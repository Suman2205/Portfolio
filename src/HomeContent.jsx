import './HomeContent.css';
export default function HomeContent(){
    return(
        <div className="homeContent col" style={{textAlign:'start'}}>
            <h1>Hi, I'm Suman</h1>
            <h2>Full Stack Web Developer</h2>
            <p>I’m a Full Stack Web Developer specializing in the MERN stack, passionate about building dynamic, user-focused applications. Alongside web development, I actively solve Data Structures & Algorithms problems to sharpen my problem-solving skills, with the goal of becoming a Software Development Engineer.</p>
            <a
                href="https://drive.google.com/file/d/1Iq3p4wTxPoPNCSPE_aGf8T26J6Y0SiMR/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                background: 'linear-gradient(90deg, #0066ff 0%, #6a11cb 100%)',
                border: 'none',
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '2rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                margin:'0'
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
                onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
                <i className="bi bi-download"></i>&nbsp; Resume
            </a>
            <div className="f-info-socials mt-3">
                <a href="https://github.com/Suman2205" target="_blank" style={{marginRight:'1rem'}}><img src='/github.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://www.instagram.com/be_genuine_one" target="_blank" style={{marginRight:'1rem'}}><img src='/instagram.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://www.linkedin.com/in/suman-mondal-197a5831b/" target="_blank" style={{marginRight:'1rem'}}><img src='/linked.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
                <a href="https://leetcode.com/sumon_22_12/" target="_blank" style={{marginRight:'1rem'}}><img src='/leetcode.png' style={{height: "1.5rem",width: "1.5rem",objectFit: "cover"}}></img></a>
            </div>
        </div>
    )
}