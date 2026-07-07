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
import "./scss/style.scss";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative text-white scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Services />
      <Formation />
      <Skills />
      <Projects />
      <SeoArticle />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
