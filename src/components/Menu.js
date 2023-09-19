import '../style/Menu.css';

function Menu() {

  return (
    <div id='menu-div' className='row'>
      <div id='logo-div' className='col-2'>
        <img id='logo' src='images/logo.jpg'></img>
        <div></div>
      </div>
      <div id='menu-items-div' className='col-8'>
        <a className='menu-item' href='#home'>Home</a>
        <a className='menu-item'>About</a>
        <a className='menu-item' href='#products'>Products</a>
        <a className='menu-item' href="#reviews">Review</a>
        <a className='menu-item' href='#contact'>Contact</a>
      </div>
      <div id='user-div' className='col-2'>
        <img className='icon-menu-item' src='images/icons/icons8-heart-50.png'></img>
        <img className='icon-menu-item' src='images/icons/icons8-cart-30.png'></img>
        <img className='icon-menu-item' src='images/icons/icons8-account-48.png'></img>
      </div>
      <div className='col-8'>
        <img id='hamburger-menu-icon' src='images/icons/icons8-hamburger-menu-50.png'></img>
      </div>
    </div>
  );
  
}

export default Menu;