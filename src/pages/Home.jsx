import { useState } from "react";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const offers = [
    "🔥 50% OFF on Electronics",
    "🛍 Buy 1 Get 1 Free",
    "🚚 Free Delivery",
    "💳 Extra 10% with Credit Card",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container hero" id="home">
        <h1>Welcome To ShopEase</h1>

        <p>
          India's Smart Online Shopping Platform
        </p>

        <br />

        <button
          className="btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        <br />
        <br />

        {isLoggedIn ? (
          <h2>Welcome Back 👋</h2>
        ) : (
          <h2>Please Login</h2>
        )}
      </section>

      {/* Offers */}
      <section className="container glass offers">

        <h2>Today's Offers</h2>

        <ul>
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>

      </section>

      {/* Products */}
      <section id="products" className="container">
        <Products />
      </section>

      {/* Contact */}
      <section id="contact" className="container">
      <Contact />
      </section>

      {/* About */}
      <section id="about" className="container">
      <About />
      </section>
    </>
  );
}