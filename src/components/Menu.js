import '../style/Menu.css';

function Menu() {

  function handleSideMenuVisibility() {
    let sideMenu = document.getElementById("side-menu")
    if(sideMenu.className === "side-menu-closed") {
      sideMenu.className = "side-menu-opened"
    } else {
      sideMenu.className = "side-menu-closed"
    }
  }

  return (
    <div>

      <div id='page-header'>
        <div id='logo-div'>
          <img id='logo' src='images/logo.jpg'></img>
          <div></div>
        </div>

        <div id='user-div'>
          <img className='icon-menu-item' src='images/icons/icons8-heart-50.png'></img>
          <img className='icon-menu-item' src='images/icons/icons8-cart-30.png'></img>
          <img className='icon-menu-item' src='images/icons/icons8-account-48.png'></img>
        </div>
      
      </div>
     
      <div id='menu-div'>

        <div id='menu-items-div'>
          <a className='menu-item' href='#home-page'>Home</a>
          <a className='menu-item'>About</a>
          <a className='menu-item' href='#products-page'>Products</a>
          <a className='menu-item' href="#review-page">Review</a>
          <a className='menu-item' href='#contact-page'>Contact</a>
        </div>

        <div id='search-div'>
          <img src='images/icons/icons8-search-30.png'></img>
          <input type='text' placeholder='Search website...' id='search-input'></input>
        </div>

        <div>
          <img id='hamburger-menu-icon' src='images/icons/icons8-hamburger-menu-50.png' onClick={() => { handleSideMenuVisibility() }}></img>
        </div>

      </div>

    </div>
  );
  
}

export default Menu;