import { AboutContent } from "./AboutContent";
import AboutImg from "./AboutImg";
import './About.css';

export default function About(){
    return(
        <div id="about" className="about row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row row-cols-1">
            <AboutImg/>
            <AboutContent/>
        </div>
    )
}