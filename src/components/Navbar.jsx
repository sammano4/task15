import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>

      <h2 className="logo">
        🛒 ShopEase
      </h2>

      <ul>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#products">Products</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

      </ul>

    </nav>
  );
}