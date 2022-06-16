import "./Category.css";
import React from "react";

export function Category({ name }) {
  console.log(name);
  return (
    <div className="category">
      <h2 className="category__name">{name}</h2>
    </div>
  );
}
