import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AboutLayout from "./layouts/AboutLayout";
import ProjectsLayout from "./layouts/ProjectsLayout";
import ServicesLayout from "./layouts/ServicesLayout";
import ContactLayout from "./layouts/ContactLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AboutLayout>
              <About />
            </AboutLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <ProjectsLayout>
              <Projects />
            </ProjectsLayout>
          }
        />
        <Route
          path="/services"
          element={
            <ServicesLayout>
              <Services />
            </ServicesLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <ContactLayout>
              <Contact />
            </ContactLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
