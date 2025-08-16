import CertificateItem from "./CertificateItem";

export default function CertificateContainer(){
    return(
        <div className="certificateContainer" style={{textAlign:'start'}}>
            <div><i className="fa-solid fa-award"></i>&nbsp;<p style={{fontWeight:"bold", fontSize:"large", display:"inline"}}>Certificates</p></div>
            <div className="row row-cols-1">
                <CertificateItem/>
            </div>
        </div>
    )
}