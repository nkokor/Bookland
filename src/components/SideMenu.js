import '../style/SideMenu.css';


function SideMenu() {
  return (
    <div id="side-menu" className='side-menu-closed'>
      <div id='side-menu-items-div' className='col-8'>
          <a className='side-menu-item' href='#home'>Home</a>
          <a className='side-menu-item'>About</a>
          <a className='side-menu-item' href='#products'>Products</a>
          <a className='side-menu-item' href="#reviews">Review</a>
          <a className='side-menu-item' href='#contact'>Contact</a>
        </div>
        <hr></hr>
        <div id='side-menu-user-div' className='col-2'>
          <img className='icon-side-menu-item' src='images/icons/icons8-heart-50.png'></img>
          <img className='icon-side-menu-item' src='images/icons/icons8-cart-30.png'></img>
          <img id="side-user-icon" className='icon-side-menu-item' src='images/icons/icons8-account-48.png'></img>
        </div>
      </div>
  );
}

export default SideMenu;
