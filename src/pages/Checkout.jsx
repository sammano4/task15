import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * 85 * item.quantity,
    0
  );

  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  const placeOrder = () => {
    if (
      !form.name ||
      !form.mobile ||
      !form.email ||
      !form.address ||
      !form.state ||
      !form.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
        />
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="summary-item"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "5px",
                }}
              />

              <div>
                <h4>{item.title}</h4>

                <small>
                  Qty : {item.quantity}
                </small>
              </div>
            </div>

            <strong>
              ₹{" "}
              {(
                item.price *
                85 *
                item.quantity
              ).toFixed(0)}
            </strong>
          </div>
        ))}

        <hr />

        <div className="summary-item">
          <span>Subtotal</span>

          <strong>
            ₹ {subtotal.toFixed(0)}
          </strong>
        </div>

        <div className="summary-item">
          <span>GST (18%)</span>

          <strong>
            ₹ {gst.toFixed(0)}
          </strong>
        </div>

        <div className="summary-total">
          <span>Grand Total</span>

          <span>
            ₹ {grandTotal.toFixed(0)}
          </span>
        </div>

        <button
          className="place-order"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}