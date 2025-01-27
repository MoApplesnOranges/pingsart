import React from "react";
import DSC_1200 from "../images/DSC_1200.jpg";
import IMG_1675 from "../images/IMG_1675.jpg";
import IMG_1715 from "../images/IMG_1715.jpg";
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
            <img src={DSC_1200} alt="heron photo" />
          </NavLink>
        </div>
        <div className="two">
          <NavLink to="/paintings">
            <img src={IMG_1675} alt="elephant photo" />
          </NavLink>
        </div>
        <div className="three">
          <NavLink to="/chineseart">
            <img src={IMG_1715} alt="chinese photo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
