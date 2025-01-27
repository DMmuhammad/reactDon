import Footerlogo from "../Footerlogo/Footerlogo";
import FooterMenu from "../Footermenu/Footermenu";
import FooterCopy from "../Copyright/Copyright";

function Footer() {
  return (
    <footer className="footer">
      <Footerlogo />
      <FooterMenu />
      <FooterCopy />
    </footer>
  );
}

export default Footer;
