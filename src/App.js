import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paintings from "./Pages/paintings";
import Home from "./Pages/Home";
import Photography from "./Pages/photography";
import Contact from "./Pages/contact";
import PhotoDetail from "./Pages/PhotoDetail";
import PaintingDetail from "./Pages/paintingdetail";
import ChinesePaintings from "./Pages/ChinesePaintings";
import ChinesePaintingDetail from "./Pages/ChinesePaintingDetail";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/paintings/:id" element={<PaintingDetail />} />
          <Route path="/photography/:id" element={<PhotoDetail />} />
          <Route path="/chineseart" element={<ChinesePaintings />} />
          <Route path="/chineseart/:id" element={<ChinesePaintingDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
