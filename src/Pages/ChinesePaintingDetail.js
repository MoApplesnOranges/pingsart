import React from "react";
import { useParams, NavLink } from "react-router-dom";
import chinesePaintings from "./data/chinesePaintings";

const ChinesePaintingDetail = () => {
  const { id } = useParams();

  const painting = chinesePaintings.find((p) => p.id.toString() === id);

  if (!painting) {
    return (
      <div className="text-white text-center mt-20">Painting not found</div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen px-10 py-10">
      <NavLink to="/chineseart" className="text-blue-400 hover:underline">
        ← Back to Chinese Paintings
      </NavLink>

      <div className="flex justify-center mt-10">
        <img
          src={painting.src}
          alt={painting.title}
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <h2 className="text-center text-2xl mt-6">{painting.title}</h2>
    </div>
  );
};

export default ChinesePaintingDetail;
