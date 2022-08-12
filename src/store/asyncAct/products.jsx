import { getAllItemsAction, getItemsAction } from "../allItems";
import { GetAllItems, GetCategories, GetItems } from "../../utils/Api";
import { loadingAction, notLoadingtAction } from "../loading";

export function getAllItems() {
  return (dispatch) => {
    dispatch(loadingAction())
    GetAllItems(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(getAllItemsAction(res));
      })
      .then(() => dispatch(notLoadingtAction()))
      .catch((err) => console.log(err));
  };
}
