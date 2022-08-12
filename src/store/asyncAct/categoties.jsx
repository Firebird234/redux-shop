import { getCategoriesAction } from "../categories";
import { GetCategories } from "../../utils/Api";
import { loadingAction, notLoadingtAction } from "../loading";

export function getCategories() {
  return (dispatch) => {
    dispatch(loadingAction())
    GetCategories(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        dispatch(getCategoriesAction(res));
      })
      .then(() => dispatch(notLoadingtAction()))
      .catch((err) => console.log(err));
  };
}
