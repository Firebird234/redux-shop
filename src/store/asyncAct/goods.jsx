import { getItemsAction } from "../sortedItems";
import { GetCategories, GetItems } from "../../utils/Api";
import { loadingAction, notLoadingtAction } from "../loading";

export function getGoods(category) {
  return (dispatch) => {
    dispatch(loadingAction())
    GetItems(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        dispatch(getItemsAction(res));
      })
      .then(() => dispatch(notLoadingtAction()))
      .catch((err) => console.log(err));
  };
}
