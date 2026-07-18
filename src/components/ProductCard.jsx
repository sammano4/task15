import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <Link to={`/products/${product.id}`}>

        <img
          src={product.image}
          alt={product.title}
        />

      </Link>

      <Link
        to={`/products/${product.id}`}
        className="product-link"
      >
        <h3>{product.title}</h3>
      </Link>

      <p>
        ⭐ {product.rating.rate}
        ({product.rating.count} Reviews)
      </p>

      <h2 className="price">
        ${product.price}
      </h2>

      <div className="product-buttons">

        <button
          className="btn"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <button className="buy-btn">
          Buy Now
        </button>

      </div>

    </div>
  );
}