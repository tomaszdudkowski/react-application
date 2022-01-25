import "../SCSS/Components/_footer.scss";
import "../SCSS/Components/_header.scss";
import Logo from "./Elements/_Logo";
import SocialIcon from "./Elements/_SocialIcon";

function Footer() {
  return (
    <footer className="flex container_footer">
      <div className="col-2">
        <div className="title"><Logo /></div>
        <div className="h-100"><SocialIcon /></div>
      </div>
      <div className="col-2">
        <div className="title">1</div>
        <div className="h-100">2</div>
      </div>
    </footer>
  );
}

export default Footer;
