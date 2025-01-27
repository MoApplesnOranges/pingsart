import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Paintings from "./Pages/paintings";
import Home from "./Pages/Home";
import Chinese from "./Pages/chineseart";
import Photography from "./Pages/photography";
import Contact from "./Pages/contact";
import "../index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/chineseart" element={<Chinese />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
