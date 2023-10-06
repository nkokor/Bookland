import '../style/SideMenu.css';


function SideMenu() {
  return (
    <div id="side-menu" className='side-menu-closed'>
      <div id='side-menu-items-div' className='col-8'>
          <a className='side-menu-item' href='#home-page'>Home</a>
          <a className='side-menu-item' href='#about-page'>About</a>
          <a className='side-menu-item' href='#products-page'>Products</a>
          <a className='side-menu-item' href="#review-page">Review</a>
          <a className='side-menu-item' href='#contact-page'>Contact</a>
      </div>
    </div>
  );
}

export default SideMenu;
