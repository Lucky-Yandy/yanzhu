import data from "../../data/index.json";
function MyPortfolio(){

 return(
    <section id="MyPortfolio" className="portfolio--section">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
           
            <h2 className="section--heading">My Projects</h2>
        </div> 
       
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index)=>(
          <div key={index} className="portfolio--section--card">
             <div className="portfolio--section--img">
              <img src={item.src} alt="product pic"/> 
             </div>
              <div className="portfolio--section--card--content">
                 <div  >
                   <h3 className="portfolio--section--title">{item.title}</h3>
                   <p className="text-md projectDescriptionBox"> {item.description}</p>
                 </div>
                  <button className="btn btn-primary project-button" >
                  <a href={item.link} className="text-sm"></a>View In Github</button>
             </div>
          </div>)
        )}
      </div>
    </section>
 );

}

export default MyPortfolio;
