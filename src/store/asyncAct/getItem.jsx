import { getItemAction } from "..";
import { GetItem } from "../../utils/Api";

export function getItem(id) {
  return (dispatch) => {
    GetItem(id).then((res) => {
      dispatch(getItemAction(res));
    });
  };
}
