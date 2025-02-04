import Logo from "./components/Logo/Logo";
import Menu from "./Menu";

function Header() {
  return (
    <div className="md:container mx-auto flex justify-between items-center">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
