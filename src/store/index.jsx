import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

function goodsReducer(state = [], action) {
  switch (action.type) {
    case "GET_ITEMS":
      return action.payload;
    case "RESET":
      return [];
    default:
      return state;
  }
}

function bucketReducer(state = [], action) {
  switch (action.type) {
    case "SET_TO_BUY":
      return [...state, ...action.payload];
    case "ADD__QUANTITY":
      return [
        ...state.map((el) => {
          if (el.id === action.payload.id) {
            el.quantity += 1;
            return el;
          } else {
            return el;
          }
        }),
      ];
    case "DELETE__QUANTITY":
      return [
        ...state.filter((el) => {
          if (el.id === action.payload.id) {
            el.quantity >= 1 ? (el.quantity -= 1) : (el.quantity = 0);
            return el;
            // return el.quantity > 0 && el;
          } else {
            return el;
          }
        }),
      ];
    case "DELETE__ITEM":
      return [
        ...state.filter((el) => {
          return el.id !== action.payload.id;
        }),
      ];
    case "RESET__STATE":
      return [];
    default:
      return state;
  }
}

function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "GET__CATEGORIES":
      return action.payload;
    default:
      return state;
  }
}

function allItemsReducer(state = [], action) {
  switch (action.type) {
    case "GET__ALL":
      return action.payload;
    case "SLIDE__ALL":
      return action.payload;
    default:
      return state;
  }
}

const defaultItem = { title: "", rating: { rate: "" }, description: "", image: "", price: "" };

function itemReducer(state = defaultItem, action) {
  switch (action.type) {
    case "GET_ITEM":
      return action.payload;
    default:
      return state;
  }
}

export const resetItemsAction = (paylod) => ({
  type: "RESET",
  payload: paylod,
});

export const getAllItemsAction = (paylod) => ({
  type: "GET__ALL",
  payload: paylod,
});

export const getItemsAction = (items) => ({
  type: "GET_ITEMS",
  payload: items,
});

export const setToBuyAction = (order) => ({
  type: "SET_TO_BUY",
  payload: order,
});

export const addQuantity = (paylod) => ({
  type: "ADD__QUANTITY",
  payload: paylod,
});

export const decreaseQuantity = (paylod) => ({
  type: "DELETE__QUANTITY",
  payload: paylod,
});

export const deleteItem = (paylod) => ({
  type: "DELETE__ITEM",
  payload: paylod,
});

export const getCategoriesAction = (paylod) => ({
  type: "GET__CATEGORIES",
  payload: paylod,
});

export const resetStateAction = (paylod) => ({
  type: "RESET__STATE",
  payload: paylod,
});

export const getItemAction = (paylod) => ({
  type: "GET_ITEM",
  payload: paylod,
});

export const slideItemAction = (paylod) => ({
  type: "SLIDE__ALL",
  payload: paylod,
});

const rootReducer = combineReducers({
  items: goodsReducer,
  bucket: bucketReducer,
  categories: categoriesReducer,
  item: itemReducer,
  allItems: allItemsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
