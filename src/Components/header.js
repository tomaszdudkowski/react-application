import "../SCSS/Components/_header.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

function Header() {
  return (
    <header>
      <div className="header">
        <Logo />
        <div className="flex">
          <ul>
            <li>
              <a href="#Categories">Categories</a>
            </li>
            <li>
              <a href="#Price">Companies</a>
            </li>
            <li>
              <a href="#Products">Technology</a>
            </li>
            <li>
              <a href="#About">Videos</a>
            </li>
          </ul>
        </div>
        <SocialIcon color="white" position="horizontal" />
      </div>
      <div className="line"></div>
    </header>
  );
}

export default Header;
