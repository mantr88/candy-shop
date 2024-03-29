import { useEffect, useState } from "react";
import Logo from "../../ui/svgComponents/Logo";
import Menu from "../../ui/svgComponents/Menu";
import PopupWindow from "../../ui/PopWindow/PopWindow";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import "./Header.css";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState(false);

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

  const onClose = () => {
    document.body.style.overflow = "visible";
    setActive(false);
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
      <div
        className="header-menu-wrap"
        onClick={() => {
          setActive(true);
        }}
      >
        <span className={textMenuCls}>MENU</span> <Menu />
      </div>
      {active && (
        <PopupWindow setActive={setActive} active={active}>
          <BurgerMenu closeModal={onClose} />
        </PopupWindow>
      )}
    </header>
  );
}

export default Header;
