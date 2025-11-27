import Header from "./Components/Header";
import Hero from "./Components/Hero";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { useEffect } from "react";
import "./scss/style.scss";

function App() {
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Fetched users:", data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative text-white scroll-smooth">
      {/* <Router>
        <Routes>
          <Route path="/pad" element={<Hero />} />
        </Routes>
      </Router> */}
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
