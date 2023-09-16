import '../style/Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <div id='message-form'>
        <input className='sender-input' type="text" placeholder="First name"></input>
        <input className='sender-input' type="text" placeholder="Last name"></input>
        <input className='sender-input' type="text" placeholder="Email address"></input>
        <input className='sender-input' type='text' placeholder='Phone number'></input>
        <input id='message-input' type="text" placeholder="Message"></input>
        <p id='submit-button'>Send message</p>
      </div>
    </div>
  );
}

export default Contact;