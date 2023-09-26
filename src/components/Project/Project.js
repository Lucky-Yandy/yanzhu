import React from 'react';
import './Project.css';
import currencyImage from '../../images/currencyimage.png';
import img from '../../images/statue.jpg';
import secondImg from '../../images/lamp.png';
import thirdImg from '../../images/piaChart.png';
import bookImg from '../../images/book.png';
const Project = () => (
 
  <div>
      <div className="projectlist">
      <div className="projectPanel">
          <h1 className="project-title"> Currency Conversion</h1>
          <div className="project-info"> 
            <img src={currencyImage} alt="img" />  
            <div>
            <p>I developed a currency converter using React, CSS, and HTML. Since I couldn't find a suitable free API, I decided to store the data in a JSON file structured similarly to 'https://exchangeratesapi.io/'. This setup allows for a seamless transition from the local API to a real one when needed.</p>
            <a href="http://currency.yanzhu.tech/"> Check it out: <span>http://currency.yanzhu.tech/</span></a>
            </div>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title">Illuminati Lamps </h1>
           <div className="project-info">
             <img src={secondImg} alt="img" />  
             <div>
             <p>I developed this shopping app using HTML, CSS, JavaScript, and React (with router, components, and API fetching).</p>
             <a href=" https://lucky-yandy.github.io/lamp-store/"  > Check it out: <span> https://lucky-yandy.github.io/lamp-store/</span>
           </a>
           </div>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title" > GitHub Statistics</h1>
           <div className="project-info">
            <img src={thirdImg} alt="img" /> 
            <div>
		<p > I used Python and Django to build this project, which includes a dashboard that utilizes Pygal and requests to fetch information from the GitHub API and display it in a 'dashboard' style format.</p> 
		
	<a href="https://github.com/Lucky-Yandy/django-dashboard/"> Check it out: <span> https://github.com/Lucky-Yandy/django-dashboard/ </span></a>
           </div>
          </div>
      </div>
      <div className="projectPanel">
          <h1 className="project-title">Children's Audiobook</h1>
          <div className="project-info">
             <img src={bookImg} alt="img" /> 
             <div>
             <p>This app is built using the MERN stack technology. Its primary purpose is to assist children whose parents may not speak English. The app is designed to read books for children. It also includes a special feature that allows it to record the voices of family members, enabling it to use their voices for reading books to the children."</p>
            <a href="https://github.com/Lucky-Yandy"> Check it out: <span>http://Children's-Audiobook</span></a>
            </div>
          </div>
      </div>
      </div>
      
    </div>
);

export default Project;   
