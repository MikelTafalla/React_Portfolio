import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Project from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Project} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> 
      <Footer />
    </div>
   
  </Router>
  
);
}

export default App;
