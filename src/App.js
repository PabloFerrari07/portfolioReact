import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LateralNavbar from "./components/LateralNavbar";
import NavBar from "./components/NavBar"
import Proyects from "./components/Proyects";
function App() {
  return (
    <div>
      <NavBar/>
      <LateralNavbar/>
      <Hero/>
      <About/>
      <Proyects/>
      <Contact/>
    </div>
  );
}

export default App;
