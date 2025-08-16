import ContactForm from "./ContactForm";
import './Contact.css';
export default function Contact(){
    return(
        <div id="contact" className="contact">
            <h2>Contact</h2>
            <h5>I'd love to hear from you - reach out for any opportunities or questions</h5>
            <div className="row">
                <ContactForm/>
            </div>
        </div>
    )
}