export function loadingReducer(state = false, action) {
  switch (action.type) {
    case "TRUE":
      return true;
    case "FALSE":
      return false;
    default:
      return state;
  }
}

export const loadingAction = (state) => ({
  type: "TRUE",
  payload: state,
});

export const notLoadingtAction = (state) => ({
  type: "FALSE",
  payload: state,
});
