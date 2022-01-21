import '../SCSS/Components/_header.scss';

function Header() {
    return (
      <header className="header">
          <p>Logo</p>
          <ul>
              <li><a href='#'>Menu</a></li>
              <li><a href='#'>Price</a></li>
              <li><a href='#'>Products</a></li>
              <li><a href='#'>About</a></li>
          </ul>
      </header>
    );
  }
  
  export default Header;