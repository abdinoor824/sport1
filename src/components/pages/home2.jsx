import React from "react";
import "./home.css";
import Footer from "./foters";
import myimage from "../../images/myimage.jpg";
import CaptainImage from "../../images/captain.jpg";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1>Galaxy 11 Football Club</h1>
      </div>

      <div className="container-2">
        <div className="container-3">
          <div className="image-one">
            <img src={myimage} alt="my apload" className="image" />
          </div>
          <div>
            <p>
              Welcome to [Galaxy 11 Football], your ultimate destination for all
              things gaming. Whether you're a seasoned pro or a casual gamer,
              we're thrilled to have you here. Our community is built on the
              love of games, the thrill of competition, and the joy of shared
              experiences.
            </p>
          </div>
        </div>
        <div className="container-3">
          <p>THE CAPTAIN</p>
          <div className="image-one">
          <img src={CaptainImage} alt="my apload" className="image"  />
          </div>
          <p>
            Ready to Dive In? Create your profile, explore the content, and get
            ready to embark on unforgettable adventures. Welcome aboard, and
            happy gaming! Warm regards, The [Galaxy 11 Football] Team Feel free
            to customize this message to better fit the tone and style of your
            website. Happy gaming! 🎉
          </p>
        </div>

        <div className="container-3">
          <div className="image-one">
          
          </div>
          <div>
            <h2>What Awaits You: </h2>
            <h4> Exclusive Content:</h4>
            Stay updated with the latest
            game news, reviews, and insider tips. 
            <h4>Connect & Compete: </h4>
            Join
            tournaments, challenge friends, and connect with fellow gamers from
            around the world. 
            <h4>Achievements & Rewards:</h4>
             Unlock achievements and
            earn rewards as you play and contribute to the community. 
            <h4>Community
            Forums:</h4>
             Share your experiences, seek advice, and discuss your
            favorite games with like-minded individuals. We believe in creating
            a fun, inclusive, and engaging environment where everyone can
            thrive. Your journey into the exciting world of [Your Website Name]
            starts now..
            </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
