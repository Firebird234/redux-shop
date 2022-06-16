import { getCategoriesAction } from "..";
import { GetCategories } from "../../utils/Api";

export function getCategories() {
  return (dispatch) => {
    GetCategories(`https://fakestoreapi.com/products/categories`)
      .then((res) => {
        dispatch(getCategoriesAction(res));
      })
      .catch((err) => console.log(err));
  };
}
