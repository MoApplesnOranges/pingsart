import React from "react";
// import DSC_1200 from "../images/DSC_1200.jpg";
// import IMG_1675 from "../images/IMG_1675.jpg";
// import IMG_1715 from "../images/IMG_1715.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="header">Welcome to Ping's Art Gallery</h1>
      </div>
      <div className="grid">
        <div className="one">
          <NavLink to="/photography">
            <img src="https://i.imgur.com/b2LOHC3.jpeg" alt="heron photo" />
          </NavLink>
          <div className="photo">
            <NavLink to="/Photography">Photography</NavLink>
          </div>
        </div>
        <div className="two">
          <NavLink to="/paintings">
            <img src="https://i.imgur.com/fTZNkXy.jpeg" alt="elephant photo" />
          </NavLink>
          <div className="paint">
            <NavLink to="/paintings">Paintings</NavLink>
          </div>
        </div>
        <div className="three">
          <NavLink to="/chineseart">
            <img src="https://i.imgur.com/0Yvgon5.jpeg" alt="chinese photo" />
          </NavLink>
          <div className="chinesepaint">
            <NavLink to="/chineseart">Chinese Paintings</NavLink>
          </div>
          <div className="artist">About the Artist</div>
        </div>

        <div className="container">
          <div className="artistphoto">
            <img src="https://i.imgur.com/bZjc1LB.jpeg" />
          </div>
          <div className="artistbio">
            <p>
              Ping is a talented artist with a passion for capturing the beauty
              of nature and culture through her art. She specializes in
              photography and traditional Chinese painting, showcasing her
              unique perspective and artistic vision.
            </p>
            <p>
              Ping's work has been exhibited in various galleries and has
              received numerous accolades for its creativity and emotional
              depth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
