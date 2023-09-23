import '../style/Home.css';

function Home() {
  return (
    <section id='home-page'>
      <img id='banner'></img>
      <img id='vertical-banner'></img>
      <p className='section-title'>Let's explore the magical world of literature</p>
      <p id='home-text'>Start now by visiting our online shop or meet us today at your local Bookland!</p>
      <a id='shop-link' href='#products'>
        Shop now
        <img src="images/icons/icons8-shopping-bag-30.png"></img>
      </a>
    </section>
  );
}

export default Home;