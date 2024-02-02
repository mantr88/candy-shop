import { useEffect, useState } from "react";
import Logo from "../../svgComponents/Logo";
import Menu from "../../svgComponents/Menu";
import "./Header.css";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  console.log("🪲 ~ Header ~ scrolling:", scrolling);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const textMenuCls = !scrolling
    ? "header-menu-text"
    : "header-menu-text hidden-text";

  const LogoCls = !scrolling ? "" : "hidden-text";

  return (
    <header className="header">
      <div className={LogoCls}>
        <Logo />
      </div>

      <div className="header-menu-wrap">
        <span className={textMenuCls}>MENU</span> <Menu />
      </div>
    </header>
  );
}

export default Header;
