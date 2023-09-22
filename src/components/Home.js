import '../style/Home.css';

function Home() {
  return (
    <div id='home'>
      <img id='banner'></img>
      <img id='vertical-banner'></img>
      <p id='home-header'>Let's explore the magical world of literature</p>
      <p id='home-text'>Start now by visiting our online shop or meet us today at your local Bookland!</p>
      <a id='shop-link' href='#products'>
        Shop now
        <img src="images/icons/icons8-shopping-bag-30.png"></img>
      </a>
    </div>
  );
}

export default Home;