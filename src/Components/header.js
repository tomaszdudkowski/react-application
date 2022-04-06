import "../SCSS/Components/_header.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";
// import menu from "../JS/Menu"

function Header() {

  return (
    <header className="navbar">
      <div className="nav">
        <Logo />
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
        </button>
        <nav id="primary-navigation" className="nav-menu" data-visible="false">
          <ul>
            <li className="active">
              <a href="#Categories">
                <span aria-hidden="true">00</span>Categories
              </a>
            </li>
            <li>
              <a href="#Price">
                <span aria-hidden="true">01</span>Companies
              </a>
            </li>
            <li>
              <a href="#Products">
                <span aria-hidden="true">02</span>Technology
              </a>
            </li>
            <li>
              <a href="#About">
                <span aria-hidden="true">03</span>Videos
              </a>
            </li>
          </ul>
          <SocialIcon color="white" position="horizontal" />
        </nav>
        
      </div>
      <div className="line"></div>
    </header>
  );
}

export default Header;
