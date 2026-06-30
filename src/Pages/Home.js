import React from "react";
import { NavLink } from "react-router-dom";
import heron from "./images/heron.jpg";
import elephant from "./images/elephant.jpg";
import chinese_rivers from "./images/chinese_rivers.jpg";

const Home = () => {
  return (
    <div className="bg-teal-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Ping's Art Gallery</h1>
        <p className="text-gray-400">
          Photography, Paintings, and Traditional Chinese Art
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <NavLink to="/photography" className="group flex flex-col">
          <div
            className="p-3 bg-[#1c1410] rounded-sm shadow-2xl
            border border-[#8a6d3b]/60
            group-hover:scale-[1.02] transition duration-300"
            style={{
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.25), 0 0 0 8px #1c1410, 0 0 0 9px rgba(212,175,55,0.4), 0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={heron}
              alt="Photography"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-center">
            Photography
          </h2>
        </NavLink>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* Paintings */}
          <NavLink to="/paintings" className="group flex flex-col">
            <div
              className="p-3 bg-[#1c1410] rounded-sm shadow-2xl
              border border-[#8a6d3b]/60
              group-hover:scale-[1.02] transition duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(212,175,55,0.25), 0 0 0 8px #1c1410, 0 0 0 9px rgba(212,175,55,0.4), 0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={elephant}
                alt="Paintings"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-center">
              Paintings
            </h2>
          </NavLink>

          {/* Chinese Paintings */}
          <NavLink to="/chineseart" className="group flex flex-col">
            <div
              className="p-3 bg-[#1c1410] rounded-sm shadow-2xl
              border border-[#8a6d3b]/60
              group-hover:scale-[1.02] transition duration-300"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(212,175,55,0.25), 0 0 0 8px #1c1410, 0 0 0 9px rgba(212,175,55,0.4), 0 10px 30px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={chinese_rivers}
                alt="Chinese Paintings"
                className="w-full h-full object-cover"
              />
            </div>

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
