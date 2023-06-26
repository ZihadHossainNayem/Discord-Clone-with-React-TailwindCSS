import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#404eed] relative">
        <Navbar />
        <Hero />
      </div>
      <Content />
      <Footer />
    </>
  );
}

export default App;
