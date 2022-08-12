import React, { useContext, useEffect } from "react";
import { MeContext } from "../../contexts/MeContext";
import { Item } from "../Item/Item";
import { useDispatch, useSelector } from "react-redux";
import "./SerchList.css";
import { LeftBar } from "../LeftBar/LeftBar";
import { getGoods } from "../../store/asyncAct/goods";
import { useParams } from "react-router-dom";
import { resetItemsAction } from "../../store/sortedItems";
import { loadingAction, notLoadingtAction } from "../../store/loading";
import { useState } from "react";

export function SerchList({ renderedItems }) {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  let { category } = useParams();

  useEffect(() => {
    dispatch(getGoods(category));
  }, [category]);

  useEffect(() => {
    return () => {
      dispatch(resetItemsAction());
    };
  }, []);

  return (
    <section className="SerchList">
      <LeftBar />
      <div className="SerchList__container">
        {renderedItems.map((el) => {
          el.quantity = 1;
          return (
            <Item
              el={el}
              id={el.id}
              key={el.id}
              description={el.description}
              image={el.image}
              title={el.title}
              rating={el.rating.rate}
              price={el.price}
              quantity={el.quantity}
            />
          );
        })}
      </div>
    </section>
  );
}
