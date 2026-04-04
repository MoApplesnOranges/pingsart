import React from "react";
import { NavLink } from "react-router-dom";
import heron from "../images/heron.jpg";
import elephant from "../images/elephant.jpg";
import chinese_rivers from "../images/chinese_rivers.jpg";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Ping's Art Gallery</h1>
        <p className="text-gray-400">
          Photography, Paintings, and Traditional Chinese Art
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <NavLink to="/photography" className="group flex flex-col">
          <img
            src={heron}
            alt="Photography"
            className="w-full h-full object-cover rounded-xl shadow-lg
            group-hover:scale-[1.02] transition duration-300"
          />

          <h2 className="mt-4 text-xl font-semibold text-center">
            Photography
          </h2>
        </NavLink>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* Paintings */}
          <NavLink to="/paintings" className="group flex flex-col">
            <img
              src={elephant}
              alt="Paintings"
              className="w-full h-full object-cover rounded-xl shadow-lg
              group-hover:scale-[1.02] transition duration-300"
            />

            <h2 className="mt-4 text-lg font-semibold text-center">
              Paintings
            </h2>
          </NavLink>

          {/* Chinese Paintings */}
          <NavLink to="/chineseart" className="group flex flex-col">
            <img
              src={chinese_rivers}
              alt="Chinese Paintings"
              className="w-full h-full object-cover rounded-xl shadow-lg
              group-hover:scale-[1.02] transition duration-300"
            />

            <h2 className="mt-4 text-lg font-semibold text-center">
              Chinese Paintings
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
