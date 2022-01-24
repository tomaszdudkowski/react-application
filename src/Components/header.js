import "../SCSS/Components/_header.scss";
import facebookicon from "../Image/Icon/iconmonstr-facebook-5.svg";
import instagramicon from "../Image/Icon/iconmonstr-instagram-15.svg";
import twittericon from "../Image/Icon/iconmonstr-twitter-5.svg";

function Header() {
  return (
    <header className="header">
      <p>Technology<span className="brand-dot">.</span></p>
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
        <li className="socialicon">
          <a className="img" href="#facebook">
            <img src={facebookicon} alt="fb"></img>
          </a>
        </li>
        <li className="socialicon">
          <a className="img" href="#instagram">
            <img src={instagramicon} alt="fb"></img>
          </a>
        </li>
        <li className="socialicon">
          <a className="img" href="#twitter">
            <img src={twittericon} alt="fb"></img>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
