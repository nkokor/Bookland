import '../style/Contact.css';
import { openMaps, openEmail } from '../helpers';


function Contact() {
  return (
    <section id='contact-page'>
      <div id='contact-options'>
        <div id='message-form'>
          <div>
            <p id='contact-title'>CONTACT US</p>
          </div> 
          <div id='contact-info-div'>
            <div id='company-info-div'>
              <div id='location-icon-div'>
                <img src='images/icons/icons8-location-contact-96.png'></img>
              </div>
              <div id='address-div'>
                <p id='company-title'>BOOKLAND</p>
                <p className='link' onClick={ () => {openMaps()} }>24, Cornelia Street</p>
                <p>New York, NY 10014</p>
                <p>USA</p>
              </div>
            </div>
            <div id='phone-mail-div'>
              <div className='contact-link'>
                <img src='images/icons/icons8-phone-contact-48.png'></img>
                <p>+978 574 55 43</p>
              </div>
              <div className='contact-link'>
                <img src='images/icons/icons8-mail-contact-24.png'></img>
                <p className='link' onClick={() => {openEmail('bookland@gmail.com')}}>bookland@gmail.com</p>
              </div>
            </div>            
          </div>
          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="First name"></input>
            <input className='sender-input second' type="text" placeholder="Last name"></input>
          </div>
          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="Email"></input>
            <input className='sender-input second' type='text' placeholder='Phone'></input>
          </div>
          <textarea id='message-input' rows="20" cols="50" placeholder='Message'></textarea>
          <div>
            <p id='submit-button'>SEND MESSAGE</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;