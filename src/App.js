
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { Helmet } from 'react-helmet';
import Home from './components/Home/Home.js';
import Project from './components/Project/Project.js';
import Resume from'./components/Resume/Resume.js';
import Contact from './components/Contact/Contact.js';

function App() {
   
  
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const [isNavMenuActive, setNavMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerActive(!isHamburgerActive);
    setNavMenuActive(!isNavMenuActive);
  };

  const handleNavLinkClick = () => {
    setHamburgerActive(false);
    setNavMenuActive(false);
  };

  
  
  
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header className="header">
        
        <nav className={isHamburgerActive ? "display-column" : "navbar" }>
          <h1 className="nav-branding">Yan Zhu</h1>
          <ul className={isHamburgerActive ? "active nav-menu h1:active nav-menu-active" : "nav-menu"} >
              <li chassName="nav-item">
                 <Link to='/home/' className="nav-link" onClick={handleNavLinkClick}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/project/' className="nav-link" onClick={handleNavLinkClick}>Project</Link>
              </li>
              <li className="nav-item">
                <Link to='/resume/' className="nav-link" onClick={handleNavLinkClick}>Resume</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact/' className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
              </li>
            </ul>  
           <div className={`hamburger ${isHamburgerActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
		 <span className ="bar"> </span>
		 <span className ="bar"> </span>
		 <span className ="bar"> </span>
	   </div>
         </nav>
          
         </header>
  
      <div className="Content">
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/home/' element={<Home />} /> 
          <Route path='/project/' element={<Project />} /> 
          <Route path='/resume/' element={<Resume />} /> 
          <Route path='/contact/' element={<Contact />} /> 
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
