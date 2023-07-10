import React from "react";
import classes from "./HeaderBottom.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import percent from "../Header/img/percent.svg";
import arrow from "../Header/img/Vector.svg";
import logo from "../Header/img/logoBottom.svg";

const HeaderBottom: React.FC = () => {
  const isTabletAndPhone = useMediaQuery({ query: "(max-width: 1102px)" });
  const isDesktope = useMediaQuery({ query: "(min-width: 1102px)" });

  return (
    <>
      {isDesktope && (
        <div className={classes.header__bottom}>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>СЛАДКИЕ ДНИ</Link>
                <img src={percent} alt="percent" />
              </li>
              <li>
                <Link to={"/"}>ПОДАРОЧНЫЕ НАБОРЫ</Link>
                <img src={arrow} alt="percent" />
              </li>
              <li>
                <Link to={"/"}>СОБРАТЬ НАБОР</Link>
                <img src={arrow} alt="percent" />
              </li>
              <li>
                <img src={logo} alt="logo" />
              </li>
              <li>
                <Link to={"/"}>СОЗДАТЬ ДИЗАЙН</Link>
              </li>
              <li>
                <Link to={"/"}>КОМПАНИЯМ</Link>
                <img src={arrow} alt="arrow" />
              </li>
              <li>
                <Link to={"/"}>ВЕСЬ КАТАЛОГ</Link>
                <img src={arrow} alt="arrow" />
              </li>
            </ul>
          </nav>
        </div>
      )}
      {isTabletAndPhone && 
        <div className={classes.mobile_container}>
          <h1>MACARONSHOP</h1> 
          <h3>since 2013</h3>
        </div>
      }
    </>
  );
};

export default HeaderBottom;
