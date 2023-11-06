import React from 'react';


 function HeroSection(){
  return( 
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box" > 
          <div className="hero--section-content">
            <p className="hero--title">Hey, I am Yan Zhu</p>
            <h1 className="hero--section--title"> 
             <span className="hero-section--title-color">Full Stack</span>{""}
             <br/>
             Developer
            </h1>
            <p className="hero--section-description">
            Frontend Software Developer specializing in the design, development and deployment of responsive web applications with JavaScript, TypeScript and the MERN stack (MongoDB, Express.js, React, Node.js).
             <br/> With seven years of experience designing narratives for games such as Pocket Knights 2, I blend art with algorithms to craft experiences that resonate.
            </p>
          </div>
          <a href="https://www.linkedin.com/in/yanzhu-tech" className="btn btn-primary">Get in touch</a>

        </div>
        <div className="hero--section--img">
         <img src="./img/yanzhu_img.png" alt="Hero Section img" /> 
        </div>
      
      </section>
  
  )
  

}


export default HeroSection;
