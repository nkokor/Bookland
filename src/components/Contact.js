import '../style/Contact.css';

function Contact() {

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/place/24+Cornelia+St,+New+York,+NY+10014,+USA/@40.7312849,-74.004794,17z/data=!3m1!4b1!4m6!3m5!1s0x89c25993b83bbd75:0xdce36dc3032c4ff6!8m2!3d40.7312809!4d-74.0022191!16s%2Fg%2F11csk1wwjb?entry=ttu", "_blank");
  };

  const SendEmail = (email) => {
    const handleEmailClick = () => {
      const mailtoLink = `mailto:${email}`;
      window.location.href = mailtoLink;
    };
    return handleEmailClick;
  };

  return (
    <section id='contact-page'>

      <div id='contact-options'>

        <div id='message-form'>

          <div>
            <p id='contact-title'>Contact us</p>
          </div> 

          <div id='contact-info-div'>

            <div id='location-icon-div'>
              <img src='images/icons/icons8-location-contact-96.png'></img>
            </div>

            <div id='address-div'>
              <p id='company-title'>BOOKLAND</p>
              <p className='link' onClick={() => {openMaps()}}>24, Cornelia Street</p>
              <p>New York, NY 10014</p>
              <p>USA</p>
            </div>

            <div id='phone-mail-div'>

              <div className='contact-link'>
                <img src='images/icons/icons8-phone-contact-48.png'></img>
                <p>+978 574 55 43</p>
              </div>

              <div className='contact-link'>
                <img src='images/icons/icons8-mail-contact-24.png'></img>
                <p className='link' onClick={SendEmail('bookland@gmail.com')}>bookland@gmail.com</p>
              </div>

            </div>
            
          </div>

          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="First name"></input>
            <input className='sender-input' type="text" placeholder="Last name"></input>
          </div>
          <div className='sender-info-row'>
            <input className='sender-input' type="text" placeholder="Email"></input>
            <input className='sender-input' type='text' placeholder='Phone'></input>
          </div>
          <textarea id='message-input' rows="20" cols="50" placeholder='Message'></textarea>
          <div>
            <p id='submit-button'>Send message</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;