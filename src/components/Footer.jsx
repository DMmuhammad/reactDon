import Footerlogo from "./Footerlogo";
import FooterMenu from "./Footermenu";
import FooterCopy from "./Copyright";

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
