import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Project from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <HashRouter basename="/">
    <div>
      <Navbar />
        <Route exact path="/" component={Project} />
        {/* <Route exact path="/projects" component={Project} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> 
      <Footer />
    </div>
   
  </HashRouter>
  
);
}

export default App;
