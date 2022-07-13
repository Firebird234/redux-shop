export function goodsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ITEMS":
      return action.payload;
    case "RESET":
      return [];
    default:
      return state;
  }
}

export const resetItemsAction = (paylod) => ({
  type: "RESET",
  payload: paylod,
});

export const getItemsAction = (items) => ({
  type: "GET_ITEMS",
  payload: items,
});
