import { ReactNode } from "react";

export type Props = {
  setActive: (arg: boolean) => void;
  children: ReactNode;
  active: boolean;
};

export type QuerySelector = HTMLDivElement | DocumentFragment;
