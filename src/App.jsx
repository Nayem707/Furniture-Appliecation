import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavStyle from "./components/NavStyle";
import SectionTeen from "./components/Section_10";
import SectionOne from "./components/Section_2";
import SectionThree from "./components/Section_3";
import SectionFour from "./components/Section_4";
import SectionFive from "./components/section_5";
import SectionSix from "./components/Section_6";
import SectionSeven from "./components/Section_7";
import SectionEight from "./components/Section_8";
import SectionNine from "./components/Section_9";
import Home from "./page/Home";

function App() {
  return (
    <>
      <NavStyle />
      <HeroSection />
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTeen />
      <Footer />
      {/* <Home /> */}
    </>
  );
}
export default App;
