import "../SCSS/Components/_footer.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

import bgimage from "../Image/Background_Image/Technology-Texture-Polo-2000.png";

function Footer() {
  return (
    <footer className="flex container_footer">
      <div className="col-2">
        <div className="title bg-color">
          <Logo />
        </div>
        <div className="h-100 wide-color clip-path">
          <img src={bgimage} alt="img_" className="bg-image" />
        </div>
      </div>
      <div className="col-2">
        <div className="title bg-grey">
          <SocialIcon color="white" position="horizontal" />
        </div>
        <div className="h-100 bg-dark"></div>
      </div>
    </footer>
  );
}

export default Footer;
