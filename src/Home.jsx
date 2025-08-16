import HomeContent from "./HomeContent";
import HomeImg from "./HomeImg";
import './Home.css';
export default function Home(){
    return(
        <div id="home" className="home row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row row-cols-1">
            <HomeContent/>
            <HomeImg/>
        </div>
    )
}