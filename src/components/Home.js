import '../style/Home.css';

function Home() {
  return (
    <section id='home-page'>
      <img id='banner'></img>
      <img id='vertical-banner'></img>
      <p className='section-title'>Let's explore the magical world of literature</p>
      <p id='home-text'>We invite you to embark on a literary voyage with us at Bookland. Whether you seek knowledge, adventure, or solace, you'll find it within the pages of our carefully selected books. Join our community, explore our shelves, and let the world of literature unfold before you.</p>
      <a id='shop-link' href='#products-page'>
        Shop now
        <img src="images/icons/icons8-shopping-bag-30.png"></img>
      </a>
    </section>
  );
}

export default Home;