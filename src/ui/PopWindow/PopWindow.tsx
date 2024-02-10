import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Props, QuerySelector } from "./PopWindow.types";
import "./PopWindow.css";

const PopupWindow = ({ active, setActive, children }: Props) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [active]);

  const closePopupByEsc = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      setActive(false);
    }
  };

  document.addEventListener("keydown", closePopupByEsc);

  return createPortal(
    <div
      className="popup-overlay"
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className="popup-content container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.querySelector("#popup-root") as QuerySelector
  );
};

export default PopupWindow;
