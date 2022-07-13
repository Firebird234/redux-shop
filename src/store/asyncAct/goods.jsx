import { getItemsAction } from "../sortedItems";
import { GetCategories, GetItems } from "../../utils/Api";

export function getGoods(category) {
  return (dispatch) => {
    GetItems(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        dispatch(getItemsAction(res));
      })
      .catch((err) => console.log(err));
  };
}
