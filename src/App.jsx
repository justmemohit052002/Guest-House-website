
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";



function App() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;