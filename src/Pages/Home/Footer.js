import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="circle-container">
           <img src="./img/yanlogo.png"  className="logosize"/>
        </div>
        <div className="footer--items">
           <ul>
          <li>
            <Link
             
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
            
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
         
          <li>
            <Link
              
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Resume"
              className="navbar--content"
            >
              Resume
            </Link>
          </li>
        </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/Lucky-Yandy"
                className="navbar--content"
                
              ><img src="./img/github.png" alt="img" className="footer--img" />
               
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yanzhu-tech/"
                className="navbar--content"
              
              ><img src="./img/Linkedin.png" alt="img" className="footer--img" />
               
              </a>
            </li>
           
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Yan</p>
        <div className="footer--social--icon">
          <ul>      
            <li>
                copyright © Yan Zhu 2023
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
