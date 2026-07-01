import React from "react";
import { NavLink } from "react-router-dom";
// import ping_portrait from "./images/ping_portrait.jpg";

const AboutMe = () => {
  return (
    <div className="bg-teal-950 text-white min-h-screen px-10 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About the Artist</h1>
        <p className="text-gray-400">Get to know Ping</p>
      </div>

      {/* Back */}
      <div className="mb-10 text-center">
        <NavLink to="/" className="text-blue-400 hover:underline">
          ← Back to Gallery
        </NavLink>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Portrait */}
        <div className="flex justify-center">
          <div
            className="p-3 bg-[#1c1410] rounded-sm shadow-2xl
            border border-[#8a6d3b]/60"
            style={{
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.25), 0 0 0 8px #1c1410, 0 0 0 9px rgba(212,175,55,0.4), 0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {/* <img
              src={ping_portrait}
              alt="Ping"
              className="w-full max-w-sm aspect-[4/5] object-cover"
            /> */}
          </div>
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Ping</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ping is a painter and photographer whose work spans traditional
            Chinese landscapes, fine art photography, and contemporary
            paintings. Drawing from a deep appreciation for nature and
            stillness, her pieces capture quiet, contemplative moments
            translated through brush and lens.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Her practice is rooted in the techniques of classical Chinese ink
            painting, blended with a modern eye for composition and light. Each
            piece is an exploration of balance between tradition and personal
            expression.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Explore her full body of work across{" "}
            <NavLink
              to="/photography"
              className="text-blue-400 hover:underline"
            >
              Photography
            </NavLink>
            ,{" "}
            <NavLink to="/paintings" className="text-blue-400 hover:underline">
              Paintings
            </NavLink>
            , and{" "}
            <NavLink to="/chineseart" className="text-blue-400 hover:underline">
              Chinese Paintings
            </NavLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
