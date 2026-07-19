import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // Convert Dollar to Rupees
  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * 85 * item.quantity,
    0
  );

  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>
          🛒 Your Cart is Empty
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🛒 Shopping Cart
      </h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="product-card"
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "12px",
            alignItems: "center",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "140px",
              height: "140px",
              objectFit: "contain",
            }}
          />

          <div style={{ flex: 1 }}>
            <h3>{item.title}</h3>

            <h2
              style={{
                color: "#0a7",
                margin: "10px 0",
              }}
            >
              ₹ {(item.price * 85).toFixed(0)}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                -
              </button>

              <strong>{item.quantity}</strong>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>
            </div>

            <h4
              style={{
                marginTop: "15px",
              }}
            >
              Total :
              ₹{" "}
              {(
                item.price *
                85 *
                item.quantity
              ).toFixed(0)}
            </h4>

            <button
              style={{
                marginTop: "15px",
                background: "red",
                color: "white",
              }}
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />

      <div
        style={{
          maxWidth: "400px",
          marginLeft: "auto",
          background: "#f8f8f8",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >
        <h3>
          Subtotal :
          ₹ {subtotal.toFixed(0)}
        </h3>

        <h3>
          Delivery :
          <span
            style={{
              color: "green",
            }}
          >
            {" "}
            Free
          </span>
        </h3>

        <h3>
          GST (18%) :
          ₹ {gst.toFixed(0)}
        </h3>

        <hr />

        <h2>
          Grand Total :
          ₹ {grandTotal.toFixed(0)}
        </h2>

        <Link to="/checkout">
          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "#ff9800",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Proceed To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}