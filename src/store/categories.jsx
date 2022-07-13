export function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "GET__CATEGORIES":
      return action.payload;
    default:
      return state;
  }
}

export const getCategoriesAction = (paylod) => ({
  type: "GET__CATEGORIES",
  payload: paylod,
});
