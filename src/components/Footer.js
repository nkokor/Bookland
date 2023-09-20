import '../style/Footer.css';

function Footer() {
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
    <div id="footer">
      <div id="footer-info">

        <div id="footer-contact">

          <div className='footer-contact-link'>
            <img src='images/icons/icons8-location-white-50.png'></img>
            <p onClick={() => {openMaps()}}>24 Cornelia Street, New York</p>
          </div>

          <div className='footer-contact-link'>
            <img src='images/icons/icons8-phone-white-50.png'></img>
            <p>+978 574 55 43</p>
          </div>

          <div className='footer-contact-link'>
            <img src='images/icons/icons8-mail-white-50.png'></img>
            <p onClick={SendEmail('bookland@gmail.com')}>bookland@gmail.com</p>
          </div>

        </div>

        <div id="footer-company-info">
          <p id="footer-title">About us</p>
          <p>We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self Help, and Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College, and School content references books proposed by various foundations as scheduled the nation over. </p> 
          <div id="footer-socials">
            <img className='footer-social-link' src="images/icons/icons8-instagram-white-50.png"></img> 
            <img className='footer-social-link' src="images/icons/icons8-facebook-white-50.png"></img>
            <img className='footer-social-link' src="images/icons/icons8-twitter-white-64.png"></img>
          </div>
        </div>

      </div>

      <p id="copyright">Copyright© 2018 BOOKLAND All rights reserved.</p>
    </div>
  )
}

export default Footer;