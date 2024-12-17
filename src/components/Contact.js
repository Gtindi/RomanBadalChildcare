// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../assets/styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, // Mail icon
    faMapMarkerAlt, // Address icon
    faPhone // Phone number icon
} from '@fortawesome/free-solid-svg-icons';


function ContactForm() {
  const [state, handleSubmit] = useForm("xqakvaaz");
  if (state.succeeded) {
      return <p>Message submitted successfully!</p>;
  }
  return (
    <div id="contact" className='row' style={{ width: "100%;" }}>
    {/* <h1>Contact Us</h1> */}
      <div class="card" style={{width: "15rem;"}}>
        <div class="card-body">
          <div className='row'>
            <div className='col-md-5'>
              <h5 class="card-title" style={{ color: "#fbc329" }}><strong>Contact Us</strong></h5>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="message"> Message </label>
                <textarea id="message" name="message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="button" type="submit" disabled={state.submitting} style={{ backgroundColor: "#fbc329" }}> Submit </button>
              </form>
            </div>
            <div className='col-md-5'>
                <div className="contact-info">
                        <p><FontAwesomeIcon className="address" icon={faMapMarkerAlt} /> Address: 1054 S 130th St, Burien, WA 98168, USA</p>
                        <p><FontAwesomeIcon className="mail" icon={faEnvelope} /> Email: romanbadal@hotmail.com </p>
                        <p>
                          <FontAwesomeIcon className="phone" icon={faPhone} /> Mobile: +206-291-0730
                          <FontAwesomeIcon className="phone" icon={faPhone} style={{ marginLeft:"20px;" }}/> Home: +206-420-1268
                        </p>
                    <p>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <ContactForm />
  );
}

export default Contact;