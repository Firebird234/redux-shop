export function bucketReducer(state = [], action) {
  switch (action.type) {
    case "SET_TO_BUY":
      if (state.some((el) => el.id === action.payload.id)) {
        return state;
      } else {
        return [...state, action.payload];
      }
    // return [...state, ...action.payload];
    case "ADD__QUANTITY":
      return [
        ...state.map((el) => {
          if (el.id === action.payload.id) {
            el.quantity += 1;
            return el;
          } else {
            return el;
          }
        }),
      ];
    case "DELETE__QUANTITY":
      return [
        ...state.filter((el) => {
          if (el.id === action.payload.id) {
            el.quantity >= 1 ? (el.quantity -= 1) : (el.quantity = 0);
            return el;
            // return el.quantity > 0 && el;
          } else {
            return el;
          }
        }),
      ];
    case "DELETE__ITEM":
      return [
        ...state.filter((el) => {
          return el.id !== action.payload.id;
        }),
      ];
    case "RESET__STATE":
      return [];
    default:
      return state;
  }
}

export const setToBuyAction = (order) => ({
  type: "SET_TO_BUY",
  payload: order,
});

export const addQuantity = (paylod) => ({
  type: "ADD__QUANTITY",
  payload: paylod,
});

export const decreaseQuantity = (paylod) => ({
  type: "DELETE__QUANTITY",
  payload: paylod,
});

export const deleteItem = (paylod) => ({
  type: "DELETE__ITEM",
  payload: paylod,
});

export const resetStateAction = (paylod) => ({
  type: "RESET__STATE",
  payload: paylod,
});
