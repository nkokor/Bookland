import '../style/SideMenu.css';


function SideMenu() {
  return (
    <div id="side-menu" className='side-menu-closed'>
      <div id='side-menu-items-div' className='col-8'>
          <a className='side-menu-item' href='#home'>Home</a>
          <a className='side-menu-item' href='#about'>About</a>
          <a className='side-menu-item' href='#shop'>Products</a>
          <a className='side-menu-item' href="#reviews">Review</a>
          <a className='side-menu-item' href='#contact'>Contact</a>
        </div>
      </div>
  );
}

export default SideMenu;
