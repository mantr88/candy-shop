import { lazy } from "react";

const Hero = lazy(() => import("./components/Hero/Hero"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));
const Review = lazy(() => import("./components/Review/Review"));
const Contacts = lazy(() => import("./components/Contacts/Contacts"));
const MainLoyout = lazy(() => import("./loyouts/MainLoyout/MainLoyout"));

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
