import React from "react";
import CardStock from "./CardStock/CardStock";
import Title from "../../../Components/UI/Title/Title";
import Container from "../../../Components/Container/Container";
import classes from "./Stock.module.css";

import img1 from "./CardStock/img/img1.webp";
import img2 from "./CardStock/img/img2.webp";
import img3 from "./CardStock/img/img3.webp";
import img4 from "./CardStock/img/img4.webp";

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type stockDataType = {
  id: number;
  topText: string;
  img: string;
  text: string;
};

const stockData: stockDataType[] = [
  {
    id: 0,
    topText: "БЕСПЛАТНАЯ ДОСТАВКА",
    img: img1,
    text: "По СПб в районе КАД –  от 3000₽По МСК – от 5000₽",
  },
  {
    id: 1,
    topText: "НОВИНКА",
    img: img2,
    text: "Шоколадное пирожное картошка на основе бисквита!",
  },
  {
    id: 2,
    topText: "НОВИНКА",
    img: img3,
    text: "Аппетитные конфеты на основе миндального печенья и крема",
  },
  {
    id: 3,
    topText: "СЛАДКАЯ НОВИНКА",
    img: img4,
    text: "Карамель на палочке из натуральных ингредиентов",
  },
  {
    id: 4,
    topText: "БЕСПЛАТНАЯ ДОСТАВКА",
    img: img1,
    text: "По СПб в районе КАД –  от 3000₽По МСК – от 5000₽",
  },
  {
    id: 5,
    topText: "НОВИНКА",
    img: img2,
    text: "Шоколадное пирожное картошка на основе бисквита!",
  },
  {
    id: 6,
    topText: "НОВИНКА",
    img: img3,
    text: "Аппетитные конфеты на основе миндального печенья и крема",
  },
  {
    id: 7,
    topText: "СЛАДКАЯ НОВИНКА",
    img: img4,
    text: "Карамель на палочке из натуральных ингредиентов",
  },
];

const Stock: React.FC = () => {
  return (
    <div className={classes.stock}>
      <Container>
        <Title text="Акции" />
        <div className={classes.card_wrapper}>
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            autoplay={true}
            pagination={{ clickable: true }}

            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {stockData.map((card) => (
              <SwiperSlide key={card.id}>
                <CardStock
                  img={card.img}
                  subText={card.topText}
                  text={card.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Stock;
