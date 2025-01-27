import React from "react";
import "./home.css";
import Footer from "./foters";
import myimage from "../../images/myimage.jpg"

const Home = () => {
  return (
    <div>
      
        <div className="header">
        <h1>Galaxy 11 Football Club</h1>
        </div>
    
        
        <div className="container-2">
          <div className="container-3">
            <div className="image-one">
              <img
                src={myimage}
               
                alt="my apload"
                className="image"
              />
            </div>
            <p>
              Our Studio isn't just an ordinary studio <br />
              it's a hub of creativity a playground for imagination, and a
              launchpad for extraordinary ideas with the aim of bringing your
              ideas to life.
            </p>
          </div>
          <div className="container-3">
            <div className="image-one">
              <img
                src="https://cdn.dribbble.com/userupload/10686467/file/original-cf91f1b65e63b049396e7b9130c1a9e2.png?resize=752x&vertical=center"
                alt=""
                className="image"
              />
            </div>
            <p>the team won take the cub</p>
          </div>
          
        
          <div className="container-3">
            <div className="image-one">
              <img
                src="https://cdn.dribbble.com/userupload/10686467/file/original-cf91f1b65e63b049396e7b9130c1a9e2.png?resize=752x&vertical=center"
                alt=""
                className="image"
              />
            </div>
            <p>
              Our Studio isn't just an ordinary studio <br />
              it's a hub of creativity a playground for imagination, and a
              launchpad for extraordinary ideas with the aim of bringing your
              ideas to life.
            </p>
          </div>
         
        </div>
        <Footer />
      </div>


  );
};

export default Home;
