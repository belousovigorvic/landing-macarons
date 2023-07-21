import React from 'react'
import classes from './NewsCard.module.css'

type NewsCardPropsType = {
  img: string
  date: string
  title: string
  text: string
}

const NewsCard: React.FC<NewsCardPropsType> = ({ img, date, title, text }) => {
  return (
    <div className={classes.newsCard}>
      <img className={classes.newsCard__img} src={img} alt="img" />
      <div className={classes.newsCard__textdata}>
        <p className={classes.newsCard__data}>{date}</p>
        <p className={classes.newsCard__title}>{title}</p>
        <p className={classes.newsCard__text}>{text}</p>
      </div>
    </div>
  )
}

export default NewsCard
