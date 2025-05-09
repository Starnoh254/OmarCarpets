import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="text-center py-10 bg-gradient-to-r from-amber-700 via-yellow-600 to-orange-500 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins tracking-tight animate-fade-in">
          Omar Carpets – Where Style Meets Comfort
        </h1>
        <p className="text-lg mt-4 font-inter font-light">
          Premium Carpets for Every Space
        </p>
      </div>

      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
