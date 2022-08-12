import { getItemAction } from "../currentItem";
import { GetItem } from "../../utils/Api";
import { loadingAction, notLoadingtAction } from "../loading";

export function getItem(id) {
  return (dispatch) => {
    dispatch(loadingAction())
    GetItem(id).then((res) => {
      dispatch(getItemAction(res));
    }).then(() => dispatch(notLoadingtAction()))
.catch((err) => console.log(err));
  };
}
