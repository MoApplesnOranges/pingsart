import React from "react";
import { NavLink } from "react-router-dom";
import chinesePaintings from "./data/chinesePaintings";

const ChinesePaintings = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Chinese Paintings</h1>
        <p className="text-gray-400">
          Traditional Chinese landscape and brush art
        </p>
      </div>

      {/* Back */}
      <div className="text-center mb-10">
        <NavLink to="/" className="text-blue-400 hover:underline">
          ← Back to Gallery
        </NavLink>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {chinesePaintings.map((painting) => (
          <NavLink
            key={painting.id}
            to={`/chineseart/${painting.id}`}
            className="group"
          >
            <img
              src={painting.src}
              alt={painting.title}
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg
              group-hover:scale-[1.02] transition duration-300"
            />
            <p className="mt-3 text-center text-gray-300">{painting.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ChinesePaintings;
