import "../SCSS/Components/_header.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

function Header() {
  return (
    <header>
      <div className="header">
        <Logo />
        <nav className="flex">
          <ul>
            <li className="active">
              <a href="#Categories"><span aria-hidden="true">00</span>Categories</a>
            </li>
            <li>
              <a href="#Price"><span aria-hidden="true">01</span>Companies</a>
            </li>
            <li>
              <a href="#Products"><span aria-hidden="true">02</span>Technology</a>
            </li>
            <li>
              <a href="#About"><span aria-hidden="true">03</span>Videos</a>
            </li>
          </ul>
        </nav>
        <SocialIcon color="white" position="horizontal" />
      </div>
      <div className="line"></div>
    </header>
  );
}

export default Header;
