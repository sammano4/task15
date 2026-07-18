import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ProductDetails from "../pages/ProductDetails";

export default function Layout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
}