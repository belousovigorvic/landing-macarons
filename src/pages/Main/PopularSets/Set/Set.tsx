import React from "react";
import classes from "./Set.module.css";
import shopIcon from "../img/shop.svg";

type SetType = {
  img: string;
  title: string;
  subTitle: string;
  price: number;
};

const Set: React.FC<SetType> = ({ img, title, subTitle, price }) => {
  return (
    <div className={classes.set}>
      <img className={classes.set__img} src={img} alt="img" />
      <div className={classes.set__wrap}>
        <h2 className={classes.set__title}>{title}</h2>
        <p className={classes.set__subtitle}>{subTitle}</p>
        <div className={classes.set__bottom}>
          <span className={classes.set__price}>{price} руб</span>
          <span className={classes.set__buy}>
            <img src={shopIcon} alt="shop-icon" />
            <span>В корзину</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Set;
