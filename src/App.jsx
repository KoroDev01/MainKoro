import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import SeoArticle from "./Components/SeoArticle";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Formation from "./Components/Formations";
import BackgroundMesh from "./Components/ui/BackgroundMesh";
import "./scss/style.scss";

function App() {
  return (
    <div className="relative min-h-screen scroll-smooth text-white">
      <BackgroundMesh />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Formation />
        <Skills />
        <Projects />
        <SeoArticle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
