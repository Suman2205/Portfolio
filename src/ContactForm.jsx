import './contactForm.css';
export default function ContactForm(){
    return(
        <div className="col-8 contactForm" >
            <h3>Connect With Me</h3>
            <div className="contactFormContainer">
                <form action={'/'}>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <input type="name" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="mb-3">
                        <input type="subject" class="form-control" placeholder="Your Subject"/>
                    </div>
                    <div class="mb-3">
                        <textarea type="name" class="form-control"  placeholder="Message"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
            
        </div>
    )
}