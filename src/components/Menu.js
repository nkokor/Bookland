import '../style/Menu.css';

function Menu() {

  return (
    <div id='menu-div' className='row'>
      <div id='logo-div' className='col-2'>
        <img id='logo' src='images/logo1.jpg'></img>
        <div></div>
      </div>
      <div id='menu-items-div' className='col-8'>
        <p className='menu-item'>Home</p>
        <p className='menu-item'>About</p>
        <p className='menu-item'>Products</p>
        <p className='menu-item'>Review</p>
        <p className='menu-item'>Contact</p>
      </div>
      <div id='user-div' className='col-2'>
        <img className='icon-menu-item' src='images/icons8-heart-50.png'></img>
        <img className='icon-menu-item' src='images/icons8-cart-30.png'></img>
        <img className='icon-menu-item' src='images/icons8-account-48.png'></img>
      </div>
      <div className='col-8'>
        <img id='hamburger-menu-icon' src='images/icons8-hamburger-menu-50.png'></img>
      </div>
    </div>
  );
  
}

export default Menu;