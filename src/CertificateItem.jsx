export default function CertificateItem(){
    return(
        <div className="col" style={{padding:'1.5rem'}}>
            <div class="card" style={{backgroundColor:'aliceblue'}}>
                <div class="card-body">
                    <h3 className="card-title">Full Stack Web Developer</h3>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Apna College</h5>
                    <h6><i className="fa-regular fa-calendar"></i>&nbsp;Aug 2025</h6>
                </div>
                <img src="certificate.png" className="card-img-top" alt="certificate"/>
            </div>
        </div>
    )
}