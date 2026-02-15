import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
      <Contact />
      <Footer />
     
  
      
    </>
  );
}

export default App;
