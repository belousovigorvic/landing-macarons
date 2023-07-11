import React, { FC } from "react";
import Container from "../../../Components/Container/Container";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import placeIcon from "./img/place.svg";
import arrowIcon from "./img/Vector.svg";
import phoneIcon from "./img/phone.svg";
import bagIcon from "./img/bag.svg";
import tgIcon from "./img/tg.svg";
import vkIcon from "./img/vk.svg";
import okIcon from "./img/ok.svg";
import burger from "./img/burger.svg";
import logo from "./img/logo.svg";
import bgLogo from "./img/bg-logo.svg";
import bgLogo2 from "./img/bg-logo2.svg";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const isTabletAndPhone: boolean = useMediaQuery({ query: "(max-width: 1125px)" });
  const isDesktope: boolean = useMediaQuery({ query: "(min-width: 1125px)" });

  return (
    <>
      <header className={classes.header}>
        <Container>
          {isTabletAndPhone && (
            <div className={classes.header__mobile_container}>
              <img src={burger} alt="burger" />
              <div className={classes.header__logo_wrapper}>
                <img src={bgLogo} alt="bgLogo" className={classes.header__bgLogo} />
                <img src={logo} alt="logo" className={classes.header__logo} />
                <img src={bgLogo2} alt="bgLogo2" className={classes.header__bgLogo2} />
              </div>
              <img src={bagIcon} alt="bagIcon" />
            </div>
          )}
          {isDesktope && (
            <div className={classes.header__top}>
              <div className={classes.header__top_left}>
                <nav className={classes.header__top_nav}>
                  <ul className={classes.header__top_ul}>
                    <li className={classes.header__top_li}>
                      <Link to={"/"}>Гарантия свежести</Link>
                    </li>
                    <li className={classes.header__top_li}>
                      <Link to={"/"}>Доставка и оплата</Link>
                    </li>
                    <li className={classes.header__top_li}>
                      <Link to={"/"}>Оптовые поставки</Link>
                    </li>
                    <li className={classes.header__top_li}>
                      <Link to={"/"}>Контакты</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={classes.header__top_right}>
                <nav className={classes.header__top_nav}>
                  <ul className={classes.header__top_ul}>
                    <li className={classes.header__top_li}>
                      <img src={placeIcon} alt="placeIcon" />
                      <span className={classes.header__top_city}>
                        Санкт-Петербург
                      </span>
                      <img src={arrowIcon} alt="arrowIcon" />
                    </li>
                    <li className={classes.header__top_li}>
                      <img src={phoneIcon} alt="phoneIcon" />
                      <span>8 812 309-82-88</span>
                    </li>
                    <li className={classes.header__top_li}>
                      <img
                        className={classes.header__top_bag}
                        src={bagIcon}
                        alt="bagIcon"
                      />
                      <span>В корзине (4 товара)</span>
                    </li>
                    <li
                      className={`${classes.header__top_li} ${classes.header__top_social}`}
                    >
                      <img src={tgIcon} alt="tgIcon" />
                      <img src={vkIcon} alt="vkIcon" />
                      <img src={okIcon} alt="okIcon" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </Container>
      </header>
      <Container>
        <HeaderBottom />
      </Container>
    </>
  );
};

export default Header;
