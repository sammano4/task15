export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, quantity: 1 }];

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "REMOVE":
      return state.filter(
        (item) => item.id !== action.payload
      );

    default:
      return state;
  }
}