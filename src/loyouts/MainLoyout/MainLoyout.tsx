import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLoyout.css";

interface LoyoutProps {
  children: JSX.Element[];
}

function MainLoyout({ children }: LoyoutProps) {
  return (
    <div className="container ">
      <div className="overlay"></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLoyout;
