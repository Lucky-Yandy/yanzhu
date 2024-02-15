import React from 'react';



const Resume = () => {
  return (
    
   <section id="Resume" className="resume-section">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          
            <h2 className="section--heading">My Resume</h2>
             
        </div> 
       
      </div>
      <div className="resume--section--container">
             <div>
	      <iframe 
	      title="Resume Document"
	      src="./img/Yan Zhu.pdf" 
	      className="resume-iframe" 
	      scrolling="yes" 
	      width="100%" 
	      height="600" ></iframe>
	      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href="./img/Yan Zhu.pdf" download className="btn btn-primary">
              Download
          </a>
         </div>
	     </div>
	     
      </div>
       
    </section>
    
  );
};

export default Resume;


  




