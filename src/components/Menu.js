import '../style/Menu.css';

function Menu() {
  return (
    <div id='menu-div'>
      <img id='logo' src='images/logo1.jpg'></img>
      <div id='menu-items-div'>
        <p className='menu-item'>Home</p>
        <p className='menu-item'>About us</p>
        <p className='menu-item'>Products</p>
        <p className='menu-item'>Review</p>
        <p className='menu-item'>Contact</p>
      </div>
      <div id='user-div'>
        <img className='icon-menu-item' src='images/icons8-heart-50.png'></img>
        <img className='icon-menu-item' src='images/icons8-cart-30.png'></img>
        <img className='icon-menu-item' src='images/icons8-account-48.png'></img>
      </div>
    </div>
  );
}

export default Menu;