import React, { useEffect, useState } from "react";
import axios from "axios";

const Paintings = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/paintings/")
      .then((res) => setPaintings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {paintings.map((painting) => (
        <div
          key={painting.id}
          style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
        >
          <img
            src={`http://localhost:8000${painting.image}`}
            alt={painting.title}
            style={{ width: "100%" }}
          />
          <h3>{painting.title}</h3>
          <p>
            <strong>Year:</strong> {painting.year}
          </p>
          <p>
            <strong>Medium:</strong> {painting.medium}
          </p>
          <p>
            <strong>Dimensions:</strong> {painting.dimensions}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Paintings;
