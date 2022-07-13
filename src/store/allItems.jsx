export function allItemsReducer(state = [], action) {
  switch (action.type) {
    case "GET__ALL":
      return action.payload;
    case "SLIDE__ALL":
      return action.payload;
    default:
      return state;
  }
}

export const slideItemAction = (paylod) => ({
  type: "SLIDE__ALL",
  payload: paylod,
});

export const getAllItemsAction = (paylod) => ({
  type: "GET__ALL",
  payload: paylod,
});
