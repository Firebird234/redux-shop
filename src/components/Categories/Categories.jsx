import "./Categories.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../Category/Category";
import { useEffect } from "react";
import { getCategories } from "../../store/asyncAct/categoties";
import { loadingAction } from "../../store/loading";

export function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <section className="categories">
      {categories.map((el) => {
        return <Category key={Math.random() * 10} name={el} />;
      })}
    </section>
  );
}
