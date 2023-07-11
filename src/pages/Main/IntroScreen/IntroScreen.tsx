import React from "react";
import Container from "../../../Components/Container/Container";
import classes from './IntroScreen.module.css';
import cake from "./img/cake1.svg";
import ellipse from "./img/Ellipse 23.svg";
import ellipse2 from "./img/Ellipse 21.svg";
import ellipse3 from "./img/Ellipse 3.svg";
import ellipse4 from "./img/Ellipse 5.svg";
import macaron from "./img/macaron.svg";
import macaron2 from "./img/macaron2.svg";
import macaron3 from "./img/macaron3.svg";
import macaron4 from "./img/macaron4.svg";
import macaron5 from "./img/macaron5.svg";
import mindal from "./img/mindal.svg";
import myata from "./img/Фон копия 6.svg";
import myata2 from "./img/Layer 23 1.svg";

import { Parallax } from "react-scroll-parallax";

const IntroScreen: React.FC = () => {
  return (
    <div className={classes.main}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.cakes}>
            <img className={classes.ellipse} src={ellipse} alt="ellipse" />
            <img className={classes.ellipse2} src={ellipse2} alt="ellipse" />
            <Parallax speed={-10}>
              <img className={classes.cake} src={cake} alt="cake" />
            </Parallax>
            {[macaron, macaron2, macaron3, macaron4, macaron5].map((image, index) => (
              <img
                key={index}
                className={classes[`macaron${index + 1}`]}
                src={image}
                alt="macaron"
              />
            ))}
            {[mindal, mindal, mindal, mindal, mindal].map((image, index) => (
              <img
                key={index}
                className={classes[`mindal${index + 1}`]}
                src={image}
                alt="mindal"
              />
            ))}
            <img className={classes.myata} src={myata} alt="mindal" />
            <img className={classes.myata2} src={myata2} alt="mindal" />
          </div>
          <div className={classes.wrapper}>
            <Parallax speed={-10}>
              <div>
                <p className={classes.name}>MACARONSHOP</p>
                <p className={classes.subtitle}>since 2013</p>
                <h1 className={classes.title}>Настоящая любовь</h1>
                <p className={classes.about}>
                  Пирожные макарон и другие десерты из натуральных ингредиентов,
                  приготовленные с любовью
                </p>
              </div>
            </Parallax>
            <img className={classes.ellipse3} src={ellipse3} alt="ellipse" />
            <img className={classes.ellipse4} src={ellipse4} alt="ellipse" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntroScreen;
