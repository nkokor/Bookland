import '../style/Contact.css';

function Contact() {
  return (
    <div id='contact'>

      <p id='contact-header'>Have some questions?</p>

      <div id='contact-options'>

        <div id='message-form'>
          <p id='touch-p'>Send us a message...</p>
          <hr></hr>
          <input className='sender-input' type="text" placeholder="First name"></input>
          <input className='sender-input' type="text" placeholder="Last name"></input>
          <input className='sender-input' type="text" placeholder="Email address"></input>
          <input className='sender-input' type='text' placeholder='Phone number'></input>
          <input id='message-input' type="text" placeholder="Message"></input>
          <p id='submit-button'>Send message</p>
        </div>

        <div id='socials-div'>

          <p id='touch-p'>...or find us here</p>
          <hr></hr>

          <div className='social-link'>
            <img src='images/icons/icons8-instagram-50.png'></img>
            <p>@booklandus</p>
          </div>

          <div className='social-link'>
            <img src='images/icons/icons8-email-50.png'></img>
            <p>bookland@gmail.com</p>
          </div>

          <div className='social-link'>
            <img src='images/icons/icons8-phone-50.png'></img>
            <p>+978 574 55 43</p>
          </div>

          <div className='social-link'>
            <img src='images/icons/icons8-location-50.png'></img>
            <p>24 Cornelia Street, New York</p>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Contact;