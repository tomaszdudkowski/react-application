import "../../SCSS/Components/Elements/_socialIcon.scss";

import facebookiconwhite from "../../Image/Icon/iconmonstr-facebook-white.svg";
import instagramiconwhite from "../../Image/Icon/iconmonstr-instagram-white.svg";
import twittericonwhite from "../../Image/Icon/iconmonstr-twitter-white.svg";
import facebookiconblack from "../../Image/Icon/iconmonstr-facebook-black.svg";
import instagramiconblack from "../../Image/Icon/iconmonstr-instagram-black.svg";
import twittericonblack from "../../Image/Icon/iconmonstr-twitter-black.svg";

function SocialIcon(props) {
  let facebookicon;
  let twittericon;
  let instagramicon;
  if (props.color === "white") {
    facebookicon = facebookiconwhite;
    twittericon = twittericonwhite;
    instagramicon = instagramiconwhite;
  } else if (props.color === "black") {
    facebookicon = facebookiconblack;
    twittericon = twittericonblack;
    instagramicon = instagramiconblack;
  } else if (props.color == null) {
    facebookicon = facebookiconblack;
    twittericon = twittericonblack;
    instagramicon = instagramiconblack;
  }

  let position;
  if(props.position === "vertical") {
    position = "vertical";
  } else if(props.position === "horizontal") {
    position = "horizontal";
  }

  return (
    <div className={position}>
      <ul className="socialIcon">
        <li className="icon">
          <a className="img" href="#facebook">
            <img src={facebookicon} alt="fb"></img>
          </a>
        </li>
        <li className="icon">
          <a className="img" href="#instagram">
            <img src={instagramicon} alt="fb"></img>
          </a>
        </li>
        <li className="icon">
          <a className="img" href="#twitter">
            <img src={twittericon} alt="fb"></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcon;
