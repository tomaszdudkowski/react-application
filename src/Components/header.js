import "../SCSS/Components/_header.scss";

function Header() {
  return (
    <header className="header">
      <p>Technology<span className="brand-dot">.</span></p>
      <ul>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Price">Price</a>
        </li>
        <li>
          <a href="#Products">Products</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
