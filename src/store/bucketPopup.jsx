export function bucketPopupReducer(state = false, action) {
  switch (action.type) {
    case "POPUP__ACTIVE":
      return true;
    case "POPUP__DISABLED":
      return false;
    default:
      return false;
  }
}

export const popupActive = (paylod) => ({
  type: "POPUP__ACTIVE",
  paylod: paylod,
});

export const popupDisabled = (paylod) => ({
  type: "POPUP__DISABLED",
  paylod: paylod,
});
