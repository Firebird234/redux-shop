import React, { useEffect, useState } from "react";
import "./Bucket.css";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../Item/Item";
import { setToBuyAction } from "../../store";
import { countBucket } from "../../functions/countBucket";
import { BucketItem } from "../BucketItem/BucketItem";
import { EmptyBucket } from "../EmptyBucket/EmptyBucket";

export function Bucket() {
  const items = useSelector((state) => state.items);
  const bucketList = useSelector((state) => state.bucket);
  const dispatch = useDispatch();
  const [orderSum, setOrderSum] = useState();

  useEffect(() => {
    setOrderSum(countBucket(bucketList));
  }, [bucketList]);

  return (
    <div className="bucket">
      <div className="bucket__wrapper">
        {bucketList.map((el) => {
          return (
            <BucketItem
              id={el.id || 0}
              key={el.id || ""}
              description={el.description || ""}
              image={el.image || ""}
              title={el.title || ""}
              rating={el.rating.rate || ""}
              price={el.price || ""}
              quantity={el.quantity}
            />
          );
        })}
      </div>
      <div className="bucket__container">
        <div className="bucket__info">
          <h2 className="bucket__title">Итого:{orderSum} товар на сумму </h2>
          <p className="bucket__subTitle">В магазинах завтра (c 10:00)</p>
          <p className="bucket__subTitle">Доставка в пункт выдачи: доступна</p>
        </div>
        <button className="bucket__order" type="button">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}
