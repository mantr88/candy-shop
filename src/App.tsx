import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Review from "./components/Review/Review";
import MainLoyout from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Hero />
      <AboutUs />
      <Review />
      <Contacts />
    </MainLoyout>
  );
}

export default App;
