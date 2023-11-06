function ContactMe(){
 return(
  <section id="Contact" className="contact--section">
   <div> 
    <p className="sub--title">Get In Touch</p>
    <h2> Contact Me</h2>
    
   </div>
   <form className="contact--form--container" action="https://formsubmit.co/017c6972d29d4c8ef5d0b6b93dc3ab8d" method="post"> 
    <div className="container">
      <label htmlFor="first-name" className="contact--label">
       <span className="text-md">First Name</span>
       <input type="text"
              className="contact--input text-md" 
              name="first-name" 
              id="first-name"
              placeholder="enter your first name"
              required/>
       </label>
        <label htmlFor="last-name" className="contact--label">
           <span className="text-md">Last Name</span>
           <input type="text"
              className="contact--input text-md" 
              name="last-name" 
              id="last-name"
              placeholder="enter your last name"
              required/>
       </label>
        <label htmlFor="email" className="contact--label">
           <span className="text-md">Email</span>
           <input type="email"
              className="contact--input text-md" 
              name="email" 
              id="email"
              placeholder="enter your email"
              required/>
       </label>
       <label htmlFor="phone-number" className="contact--label">
           <span className="text-md">Phone Number</span>
           <input type="text"
              className="contact--input text-md" 
              name="phone-number" 
              id="phone-number"
              placeholder="enter your phone number"
              required/>
       </label>
    </div>
    
        <label htmlFor="message" className="contact--label">
           <span className="text-md">Message</span>
           <textarea 
              className="contact--input text-md" 
              id="message"
              rows="8"
              placeholder="enter your message"
              required/>
       </label>
       <div>
        <button className="btn btn-primary">submit</button>
       </div>
   
   </form>
  </section>
 
 );

}
export default  ContactMe;
