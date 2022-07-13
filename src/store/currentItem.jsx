const defaultItem = { title: "", rating: { rate: "" }, description: "", image: "", price: "" };

export function itemReducer(state = defaultItem, action) {
  switch (action.type) {
    case "GET_ITEM":
      action.payload.quantity = 1;
      return action.payload;
    default:
      return state;
  }
}

export const getItemAction = (paylod) => ({
  type: "GET_ITEM",
  payload: paylod,
});
