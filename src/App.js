import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Project from "./pages/projects";



function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Project} />
        <Route exact path="/projects" component={Project} />
    </div>
  </Router>
);
}

export default App;
