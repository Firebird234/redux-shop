import { getAllItemsAction, getItemsAction } from "../allItems";
import { GetAllItems, GetCategories, GetItems } from "../../utils/Api";

export function getAllItems() {
  return (dispatch) => {
    GetAllItems(`https://fakestoreapi.com/products`)
      .then((res) => {
        dispatch(getAllItemsAction(res));
      })
      .catch((err) => console.log(err));
  };
}
