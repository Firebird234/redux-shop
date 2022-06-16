import React from "react";
import { LeftBar } from "../LeftBar/LeftBar";
import "./Main.css";

export function Main() {
  return (
    <section className="main">
      <LeftBar />
      <div className="main__container">
        <div className="main__wrapper">
          <div className="main__job"></div>
          <div className="main__actions"></div>
        </div>
        <div className="main__items">
          <span className="main__items-title">Товары</span>
        </div>
      </div>
    </section>
  );
}
