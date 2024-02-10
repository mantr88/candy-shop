import { scrolledTo } from "../../helpers/scrolledTo";
import CloseSquare from "../../ui/svgComponents/CloseSquare";
import Logo from "../../ui/svgComponents/Logo";
import "./BurgerMenu.css";

type Props = {
  closeModal: () => void;
};

export function BurgerMenu({ closeModal }: Props) {
  return (
    <div className="bgmenu-container">
      <div
        className="bgmenu-wrap"
        onClick={() => {
          closeModal();
          console.log("onClose");
        }}
      >
        <Logo />
        <CloseSquare />
      </div>
      <nav>
        <ul className="nav-list">
          <li
            className="nav-item"
            onClick={() => {
              closeModal();
              scrolledTo("hero-section");
            }}
            aria-label="Link to the go-to Banner section"
          >
            <p>główna</p>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              closeModal();
              scrolledTo("about-section");
            }}
            aria-label="Link to the go-to About section"
          >
            <p>O nas</p>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              closeModal();
              scrolledTo("review-section");
            }}
            aria-label="Link to the go-to Cases section"
          >
            <p>Recenzje</p>
          </li>
          <li
            className="nav-item"
            onClick={() => {
              closeModal();
              scrolledTo("contact-section");
            }}
            aria-label="Link to the go-to FAQ section"
          >
            <p>Kontakty</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
