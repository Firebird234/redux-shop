export function loggedInReducer(state = false, action) {
  switch (action.type) {
    case "TRUE":
      return true;
    case "FALSE":
      return false;
    default:
      return state;
  }
}

export const loggedInAction = (state) => ({
  type: "TRUE",
  payload: state,
});

export const loggedOutAction = (state) => ({
  type: "FALSE",
  payload: state,
});
