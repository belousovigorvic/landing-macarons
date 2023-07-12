import React from "react";
import classes from "./CardStock.module.css";

type CardStockProps = {
  img: string;
  text: string;
  subText: string;
};

const CardStock: React.FC<CardStockProps> = ({ img, text, subText }) => {
  return (
    <div className={classes.card}>
      <div className={classes.wrap__subText}>
        <p className={classes.subText}>{subText}</p>
      </div>
      <img className={classes.img} src={img} alt="img" />
      <div className={classes.textWrap}>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default CardStock;
