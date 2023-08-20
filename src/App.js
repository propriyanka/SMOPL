import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Routes and Route
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Main from "./components/Main/Main";
import Process from "./components/Process/Process";

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Main/>
        <Process/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
