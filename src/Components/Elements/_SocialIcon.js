import "../../SCSS/Components/Elements/_socialIcon.scss";

import facebookiconwhite from "../../Image/Icon/iconmonstr-facebook-white.svg";
import instagramiconwhite from "../../Image/Icon/iconmonstr-instagram-white.svg";
import twittericonwhite from "../../Image/Icon/iconmonstr-twitter-white.svg";
import facebookiconblack from "../../Image/Icon/iconmonstr-facebook-black.svg";
import instagramiconblack from "../../Image/Icon/iconmonstr-instagram-black.svg";
import twittericonblack from "../../Image/Icon/iconmonstr-twitter-black.svg";

function SocialIcon(color) {
  var facebookicon;
  var twittericon;
  var instagramicon;
  if(color === "white") {
    facebookicon = {facebookiconwhite};
    instagramicon = {instagramiconwhite};

  } else if(color === "black") {

  } else {

  }


  return (
    <ul>
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
  );
}

export default SocialIcon;
