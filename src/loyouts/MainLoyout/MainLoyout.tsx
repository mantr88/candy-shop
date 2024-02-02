import Header from "../Header/Header";
import "./MainLoyout.css";

interface LoyoutProps {
  children: string;
}

function MainLoyout({ children }: LoyoutProps) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default MainLoyout;
