import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaintingDetail = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/paintings/${id}/`)
      .then((res) => setPainting(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!painting) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <img
        src={`${painting.image}`}
        alt={painting.title}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <h2>{painting.title}</h2>
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
  );
};

export default PaintingDetail;
