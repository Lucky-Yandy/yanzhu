import React,{useState} from 'react';
import './Contact.css';
import hiring from '../../images/friends.png';
import github from '../../images/icons8-github-100.png';
import linkedin from '../../images/icons8-linkedin-100.png';

const Contact = () => {
   
 return (
    <div className="contact">
      <img className="hands" src={hiring} alt="Hiring" />
      <div className="contactpart">
        <h1>Contact</h1>
       
         <form className="contact-form" action="https://formsubmit.co/zyadkr5129@gmail.com" method="post">
          <input
            name="name"
            placeholder="Enter your name"
            className="light-placeholder"
            type="text"
            required
          />
          <input
            name="email"
            placeholder="Enter your email"
            className="light-placeholder"
            type="email"
            required
          />
          <textarea
           name="message"
            placeholder="Enter your message"
            className="light-placeholder"
            required
          />
          <input type="hidden" name="_next" value="https://lucky-yandy.github.io/form-submit/"/>
          <button type="submit">Submit</button>
         </form>
        
      

        <div className="links">
          <a href="https://github.com/Lucky-Yandy">
            <img className="link-img" src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/4523yandy/">
            <img className="link-img" src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 























