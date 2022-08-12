import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStateAction, slideItemAction } from "../../store/allItems";
import { getGoods } from "../../store/asyncAct/goods";
import { getAllItems } from "../../store/asyncAct/products";
import { MainItem } from "../MainItem/MainItem";
import "./MainItems.css";

export function MainItems() {
  const items = useSelector((state) => state.allItems);
  const dispatch = useDispatch();
  const [renderedItems, setRenderedItems] = useState([]);

  const [slideLength, setSlideLength] = useState(330);

  useEffect(() => {
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    const randCategory = categories[Math.floor(Math.random() * categories.length)];
    dispatch(getAllItems());
  }, []);

  useEffect(() => {
    setRenderedItems(items.slice(0, 8));
  }, [items]);

  function onRightArr() {
    const slided = [...renderedItems.slice(1), [...renderedItems].shift()];
    dispatch(slideItemAction(slided));
  }

  function onLeftArr() {
    const slided = [[...renderedItems].pop(), ...renderedItems.slice(0, -1)];
    dispatch(slideItemAction(slided));
    // const slided = [...renderedItems.slice(0, -1)];
    // dispatch(slideItemAction(slided));
    // setSlideLength((prev) => prev + 330);
    // const slided2 = [[...renderedItems].pop(), ...renderedItems.slice(0)];
    // dispatch(slideItemAction(slided2));
  }

  return (
    <div className="mainItems">
      <div className="mainItems__left" onClick={onLeftArr}>
        <span className="mainItems__left_arrow"></span>
        <span className="mainItems__left_arrow2"></span>
      </div>
      <div className="mainItems__slider">
        {renderedItems.slice(0, 10).map((el) => {
          return el ? (
            <MainItem key={el.id} price={el.price} image={el.image} title={el.title} id={el.id} />
          ) : (
            ""
          );
        })}
      </div>
      <div className="mainItems__right" onClick={onRightArr}>
        <span className="mainItems__right_arrow"></span>
        <span className="mainItems__right_arrow2"></span>
      </div>
    </div>
  );
}

// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { resetStateAction, slideItemAction } from "../../store/allItems";
// import { getGoods } from "../../store/asyncAct/goods";
// import { getAllItems } from "../../store/asyncAct/products";
// import { MainItem } from "../MainItem/MainItem";
// import "./MainItems.css";

// export function MainItems() {
//   const items = useSelector((state) => state.allItems);
//   const dispatch = useDispatch();
//   const [renderedItems, setRenderedItems] = useState([]);

//   useEffect(() => {
//     const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
//     const randCategory = categories[Math.floor(Math.random() * categories.length)];
//     dispatch(getAllItems());
//   }, []);

//   useEffect(() => {
//     setRenderedItems(items.slice(0, 8));
//   }, [items]);

//   function onRightArr() {
//     const slided = [...renderedItems.slice(1), [...renderedItems].shift()];
//     dispatch(slideItemAction(slided));
//   }

//   function onLeftArr() {
//     const slided = [[...renderedItems].pop(), ...renderedItems.slice(0, -1)];
//     dispatch(slideItemAction(slided));
//   }

//   return (
//     <div className="mainItems">
//       <div className="mainItems__left" onClick={onLeftArr}>
//         <span className="mainItems__left_arrow"></span>
//         <span className="mainItems__left_arrow2"></span>
//       </div>
//       <div className="mainItems__slider">
//         {renderedItems.slice(0, 10).map((el) => {
//           return el ? (
//             <MainItem key={el.id} price={el.price} image={el.image} title={el.title} id={el.id} />
//           ) : (
//             ""
//           );
//         })}
//       </div>
//       <div className="mainItems__right" onClick={onRightArr}>
//         <span className="mainItems__right_arrow"></span>
//         <span className="mainItems__right_arrow2"></span>
//       </div>
//     </div>
//   );
// }
