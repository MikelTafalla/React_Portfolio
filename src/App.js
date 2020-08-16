import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Projects from "./pages/projects";


function App() {
  return (
    
    <Router>
      <div>
        <Navbar />
        <Projects />
        
      </div>
    </Router>
    
  );
}

export default App;
