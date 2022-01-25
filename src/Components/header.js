import "../SCSS/Components/_header.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

function Header() {
  return (
    <header className="header">
      <Logo />
      <ul>
        <li>
          <a href="#Categories">CATEGORIES</a>
        </li>
        <li>
          <a href="#Price">COMPANIES</a>
        </li>
        <li>
          <a href="#Products">TECHNOLOGY</a>
        </li>
        <li>
          <a href="#About">VIDEOS</a>
        </li>
        <SocialIcon />
      </ul>
    </header>
  );
}

export default Header;
