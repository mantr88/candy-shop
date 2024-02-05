import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
import MainLoyout from "./loyouts/MainLoyout/MainLoyout";

function App() {
  return (
    <MainLoyout>
      <Hero />
      <AboutUs />
    </MainLoyout>
  );
}

export default App;
