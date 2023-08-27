import React from 'react';
import './Project.css';
import currencyImage from '../../images/currencyimage.png';
import img from '../../images/statue.jpg';

const Project = () => (
 
  <div>
      <div className="projectlist">
      <div className="projectPanel">
          <h1 className="project-title"> Currency Conversion</h1>
          <div className="project-info"> 
            <img src={currencyImage} alt="img" />  
            <a href="http://currency.yanzhu.tech/"> Check it out:<span>http://currency.yanzhu.tech/</span></a>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title">Second Project</h1>
           <div className="project-info">
             <img src={img} alt="img" />  
             <a href="https://github.com/Lucky-Yandy"  >This is the second app I made. Check it out:<span>http://link to second project</span>
           </a>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title" > Third Project</h1>
           <div className="project-info">
            <img src={img} alt="img" />  
            <a href="https://github.com/Lucky-Yandy">This is the third app I made. Check it out:<span>http://link to third  project</span></a>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title">Fourth Project </h1>
          <div className="project-info">
             <img src={img} alt="img" /> 
            <a href="https://github.com/Lucky-Yandy">This is the fourth app I made. Check it out:<span>http://link to fourth Project</span></a>
          </div>
      </div>
      </div>
      
    </div>
);

export default Project;   
