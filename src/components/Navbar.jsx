import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <h2 className="logo">🛒 ShopEase</h2>

      <ul>
        <li>
  <button className="nav-btn" onClick={() => scrollToSection("home")}>
    Home
  </button>
</li>

<li>
  <button className="nav-btn" onClick={() => scrollToSection("products")}>
    Products
  </button>
</li>

<li>
  <button className="nav-btn" onClick={() => scrollToSection("contact")}>
    Contact
  </button>
</li>

<li>
  <button className="nav-btn" onClick={() => scrollToSection("about")}>
    About
  </button>
</li>

<li>
  <Link to="/profile">Profile</Link>
</li>
      </ul>
    </nav>
  );
}