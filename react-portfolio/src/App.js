import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import paraImg from "./assets/paraImg.jpg";
import ScrollToTop from "./components/ScrollToTop";
// import SlidingElement from "./components/SlidingElement";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <ScrollToTop />
      {/* <SlidingElement /> */}
      <div
        className="bg-fixed bg-center md:bg-cover"
        style={{ backgroundImage: `url(${paraImg})` }}
      >
        <div className="h-[300px] md:h-screen bg-opacity-75 flex justify-center"></div>
      </div>
      <SocialLinks />
      <About />
      <Portfolio />
      <div className="py-10 bg-gray-800"></div>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
