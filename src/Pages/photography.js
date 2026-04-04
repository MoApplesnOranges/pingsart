import React from "react";
import { NavLink } from "react-router-dom";
import photos from "./data/photos"; // Assuming you export the photos array from photos.js
// import your images
// import heron from "../images/heron.jpg";
// import ZachCatAR15 from "../images/ZachCatAR15.jpg";

// const photos = [
//   { id: 1, src: heron, title: "Heron" },
//   { id: 2, src: ZachCatAR15, title: "Zach's Cat" },
// ];

const Photography = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Photography</h1>
        <p className="text-gray-400">A collection of captured moments</p>
      </div>

      {/* Back Button */}
      <div className="mb-10 text-center">
        <NavLink to="/" className="text-blue-400 hover:underline">
          ← Back to Gallery
        </NavLink>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {photos.map((photo) => (
          <NavLink
            key={photo.id}
            to={`/photography/${photo.id}`}
            className="group"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg
              group-hover:scale-[1.02] transition duration-300"
            />
            <p className="mt-3 text-center text-gray-300">{photo.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Photography;
