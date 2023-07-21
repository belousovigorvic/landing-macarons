import React from 'react'
import NewsData from './NewsData'
import classes from './News.module.css'
import Container from '../../../Components/Container/Container'
import Title from '../../../Components/UI/Title/Title'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import NewsCard from './NewsCard/NewsCard'
import Button from '../../../Components/UI/Button/Button'

const News: React.FC = () => {
  return (
    <div className={classes.news}>
      <Container>
        <Title text={'Новости'} />
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={true}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2
            },
            1100: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >
          {NewsData.map(card => (
            <SwiperSlide key={card.id}>
              <NewsCard
                img={card.img}
                date={card.date}
                title={card.title}
                text={card.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button>Все новости</Button>
      </Container>
    </div>
  )
}

export default News
