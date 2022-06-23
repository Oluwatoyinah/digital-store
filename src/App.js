import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Shop from "./routes/Shop";
import Cart from "./routes/Cart"
import WishList from "./routes/WishList";
import NoPage from "./components/ErrorPage/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
