
import './Home.css';
import React, { useState,useEffect } from 'react';
import {TextAnim} from "text-animations-react";
import profile_pic from '../../images/IMG_6739.jpg';
/*import TypeIt from "typeit-react";*/

const Home = () => {
  
  

  return (
  
    <div className="aboutme" >
      <img className="mypicture" src={profile_pic}/>
      <div  className="about">
         <h1> Hello </h1>
         <p>A Bit About Me:</p>
         <p>Seven years of experience as a Video Game Lead Writer & Narrative 
         Designer specializing  in crafting immersive game worlds 
         and coordinating diverse teams of game designers, artists, and software developers.
         </p>
        
       <TextAnim name="Front-end Web Development" 
                   size={2} type="flipvertical"
                   color="LightCoral"
                   count="infinite"
                  duration={2}/> 
          {/*<div className="colorfulAnamition">        
              <TypeIt
                options={{
                    strings: ["Focus On Front-end Web Development"],
                    speed: 20,
                    waitUntilVisible: true,
                  
                }}
            />
          </div>*/}
      </div>
    
    </div>

)
}
export default Home;
