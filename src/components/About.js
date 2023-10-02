import '../style/About.css';

function About() {
  return (
    <section id='about-page'>
      <p id='about-title'>
        About us
      </p>

      <div className="about-cards">

        <div className="about-section">
          <img className="about-section-image" id='about1' src='images/about1.jpg'></img>
          <div className="about-section-info">
            <p className="about-section-title">Who are we?</p>
            <p className="about-section-text">Founded in 2012, Bookland has been serving avid readers and book enthusiasts for over 10 years. Our journey began with a simple dream – to create a haven for book lovers, a place where the magic of literature knows no bounds. Over the years, we've grown, but our commitment to fostering a love for books remains unwavering.</p>
          </div>
        </div>

        <div className="about-section">
          <div className="about-section-info">
            <p className="about-section-title">Our mission</p>
            <p className="about-section-text">Our mission is to connect people with the written word, to ignite the joy of reading, and to be a source of inspiration for all. We curate an extensive collection of books spanning various genres, from timeless classics to contemporary bestsellers, ensuring there's something for everyone. We take pride in our role as cultural custodians, preserving the rich tapestry of human stories through literature.</p>
          </div>
          <img className="about-section-image" id='about2' src='images/about2.jpg'></img>
        </div>

      </div>

    </section>
  );
}

export default About;
