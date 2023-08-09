import React from 'react';
import './Project.css';
import img from '../../images/statue.jpg';

const Project = () => (
 
  <div>
      <div className="projectlist">
      <div className="projectPanel">
          <h1 className="project-title"> Currency Convert</h1>
          <img src={img} alt="img" />  
           <div className="project-info"> link to first app
            <a href="https://github.com/Lucky-Yandy"/>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title">second project name</h1>
          <img src={img} alt="img" />  
          <div className="project-info"> link to secont app
            <a href="https://github.com/Lucky-Yandy"/>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title" > third project name.</h1>
          <img src={img} alt="img" />  
          <div className="project-info"> link to third  app .
            <a href="https://github.com/Lucky-Yandy"/>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title"> fouth project name.</h1>
          <img src={img} alt="img" /> 
          <div className="project-info">link to currency covert app .
            <a href="https://github.com/Lucky-Yandy"/>
          </div>
      </div>
      </div>
      
    </div>
);

export default Project;   
