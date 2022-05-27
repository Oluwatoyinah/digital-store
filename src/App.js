import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Shop from "./routes/Shop";
import ShopDetails from "./routes/ShopDetails"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
      </Routes>
    </>
  );
}

export default App;
