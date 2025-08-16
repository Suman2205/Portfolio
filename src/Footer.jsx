import './Footer.css';
export default function Footer(){
    return(
        <div id="footer" className="footer">
            <div className="f-info">
                <div className="f-info-socials mt-3">
                    <a href="https://github.com/Suman2205" target="_blank"><i className="fa-brands fa-github" style={{fontSize:'large'}}></i></a>
                    <a href="https://www.instagram.com/be_genuine_one" target="_blank"><i className="fa-brands fa-square-instagram" style={{fontSize:'large'}}></i></a>
                    <a href="https://www.linkedin.com/in/suman-mondal-197a5831b/" target="_blank"><i className="fa-brands fa-linkedin" style={{fontSize:'large'}}></i></a>
                </div>
                <div className="f-info-brands" style={{fontSize:'medium'}}>&copy; 2025 Suman Mondal. All rights reserved</div>
                <div className="f-info-brands" style={{fontSize:'medium'}}>Made with &nbsp;<i className="fa-solid fa-heart" style={{color:'red'}}></i>&nbsp;</div>
            </div>
        </div>
    )
}