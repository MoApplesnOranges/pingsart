import React from "react";
// import DSC_1200 from "../images/DSC_1200.jpg";
// import IMG_1675 from "../images/IMG_1675.jpg";
// import IMG_1715 from "../images/IMG_1715.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";

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
        </div>
        <div className="two">
          <NavLink to="/paintings">
            <img src="https://i.imgur.com/fTZNkXy.jpeg" alt="elephant photo" />
          </NavLink>
        </div>
        <div className="three">
          <NavLink to="/chineseart">
            <img src="https://i.imgur.com/0Yvgon5.jpeg" alt="chinese photo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
