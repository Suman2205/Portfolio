import CertificateContainer from "./CertificateContainer";
import { EducationContainer } from "./EducationContainer";

export default function Education(){
    return (
        <div id="education" className="education" style={{margin:"20px"}}>
            <h2>Education & Certificates</h2>
            <h5>My academic background and professional certificates</h5>
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
                <EducationContainer/>
                <CertificateContainer/>
            </div>
        </div>
    )
}