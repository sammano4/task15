import { useReducer } from "react";
import CartContext from "./CartContext";
import { cartReducer, initialState } from "../reducer/cartReducer";

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}