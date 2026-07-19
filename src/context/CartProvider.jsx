import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import { cartReducer } from "../reducer/cartReducer";

export default function CartProvider({ children }) {

  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const clearCart = () => {
    localStorage.removeItem("cart");

    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}