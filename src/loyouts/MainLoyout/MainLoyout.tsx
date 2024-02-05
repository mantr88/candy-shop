import Header from "../Header/Header";
import "./MainLoyout.css";

interface LoyoutProps {
  children: JSX.Element;
}

function MainLoyout({ children }: LoyoutProps) {
  return (
    <div className="overlay">
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default MainLoyout;
