import React from "react";
import { useParams, NavLink } from "react-router-dom";
import photos from "./data/photos";

const PhotoDetail = () => {
  const { id } = useParams();
  const photo = photos.find((p) => p.id.toString() === id);

  if (!photo) {
    return <div className="text-white text-center mt-20">Image not found</div>;
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen px-10 py-10">
      {/* Back */}
      <NavLink to="/photography" className="text-blue-400 hover:underline">
        ← Back to Photography
      </NavLink>

      {/* Image */}
      <div className="flex justify-center mt-10">
        <img
          src={photo.src}
          alt={photo.title}
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h2 className="text-center text-2xl mt-6">{photo.title}</h2>
    </div>
  );
};

export default PhotoDetail;
