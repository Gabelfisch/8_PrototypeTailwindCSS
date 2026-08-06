import Logo from "./Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-fuchsia-800 m-4 flex flex-row justify-around">
        <Logo></Logo>
        <NavLinks listElements={["Products", "Developers", "Enterpise", "Company", "Pricing"]} />
    </nav>
    )
};

export default NavBar;