import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "All";

  const url =
    category === "All"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`;

  const products = useFetch(url);

  return (
    <section className="container" id="products">

      <h1 className="products-title">
        Our Products
      </h1>

      <div className="category">

        <button
          onClick={() =>
            setSearchParams({ category: "electronics" })
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            setSearchParams({ category: "jewelery" })
          }
        >
          Jewellery
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "men's clothing",
            })
          }
        >
          Men's Clothing
        </button>

        <button
          onClick={() =>
            setSearchParams({
              category: "women's clothing",
            })
          }
        >
          Women's Clothing
        </button>

        <button
          onClick={() => setSearchParams({})}
        >
          All
        </button>

      </div>

      <h3 className="selected-category">
        Selected Category : {category}
      </h3>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}