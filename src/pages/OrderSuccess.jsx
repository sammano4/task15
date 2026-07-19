import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();

  const orderId = state?.orderId || "ORD-000001";

  return (
    <div className="order-success">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Placed Successfully!</h1>

        <p>Thank you for shopping with <strong>ShopEase</strong>.</p>

        <h3>Order ID</h3>

        <div className="order-id">{orderId}</div>

        <Link to="/">
          <button className="btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}