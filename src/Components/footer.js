import "../SCSS/Components/_footer.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

import bgimage from "../Image/Background_Image/Technology-Texture-Polo-2000.png";
import footerimage from "../Image/julian-o-hayon-oW4tZeidfkA-unsplash.jpg";

function Footer() {
  return (
    <footer className="flex container_footer">
      <div className="col-2">
        <div className="title bg-color">
          <Logo />
        </div>
        <div className="h-100 wide-color clip-path">
          <div className="navs">
            <ul className="col-1">
              <li>
                <a href="#Magazine">Magazine</a>
              </li>
              <li>
                <a href="#Videos">Videos</a>
              </li>
              <li>
                <a href="#Lists">Lists</a>
              </li>
            </ul>
            <ul className="col-1">
              <li>
                <a href="#Companies">Companies</a>
              </li>
              <li>
                <a href="#Events">Events</a>
              </li>
            </ul>
            <ul className="col-2">
              <li>
                <a href="#About">About Us</a>
              </li>
              <li>
                <a href="#Editorial">Editorial</a>
              </li>
              <li>
                <a href="#Adv">Advertise</a>
              </li>
              <li>
                <a href="#Press">Press Releases</a>
              </li>
              <li>
                <a href="#PR">PR Newswire</a>
              </li>
            </ul>
          </div>
          <div className="footer-info col-100">
            <p>POWERED BY</p>
            <p className="make-by">DMD DUDKOWSKI MEDIA DESIGNE</p>
            <p>&copy; 2022 DUDKOWSKI MEDIA DESIGNE. ALL RIGHTS RESERVED.</p>
          </div>
          <img src={bgimage} alt="img_" className="bg-image" />
        </div>
      </div>
      <div className="col-2">
        <div className="title bg-grey">
          <SocialIcon color="white" position="horizontal" />
        </div>
        <div className="h-100 bg-dark flex">
          <div className="col-2">
            <img src={footerimage} alt="img_" className="footer-image cover-center"/>
          </div>
          <div className="col-4 col-center col-padding">
            <h3>TECHNOLOGY</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>READ MORE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
