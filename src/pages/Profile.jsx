import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Profile() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  return (

    <div className="container">

      <h1 className="products-title">
        My Cart
      </h1>

      {
        cart.length===0
        ?

        <h2>No Products In Cart</h2>

        :

        cart.map((item)=>(

          <div
            key={item.id}
            className="glass cart-item"
            style={{
            padding:20,
            marginBottom:20
          }}
          >

            <h3>{item.title}</h3>

            <h2>
              Qty :
              {item.quantity}
            </h2>

            <br/>

            <div className="cart-buttons">
        <button
            className="btn"
            onClick={() => increaseQuantity(item.id)}
        >
            +
        </button>

        <button
            className="btn"
            onClick={() => decreaseQuantity(item.id)}
        >
            -
        </button>

        <button
            className="btn remove-btn"
            onClick={() => removeFromCart(item.id)}
        >
            Remove
        </button>

        </div>
          </div>
        ))
      }
    </div>
  );
}