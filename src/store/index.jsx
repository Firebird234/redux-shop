import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { bucketReducer } from "./bucket";
import { allItemsReducer } from "./allItems";
import { categoriesReducer } from "./categories";
import { itemReducer } from "./currentItem";
import { goodsReducer } from "./sortedItems";
import { loggedInReducer } from "./loggedIn";
import { loadingReducer } from "./loading";
import { bucketPopupReducer } from "../store/bucketPopup";

const rootReducer = combineReducers({
  items: goodsReducer,
  bucket: bucketReducer,
  categories: categoriesReducer,
  item: itemReducer,
  allItems: allItemsReducer,
  loggedIn: loggedInReducer,
  loading: loadingReducer,
  bucketPopup: bucketPopupReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
