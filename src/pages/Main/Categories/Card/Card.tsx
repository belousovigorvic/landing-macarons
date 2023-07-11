import React, { CSSProperties } from 'react'
import classes from './Card.module.css'

type CardProps = {
  img: string,
  title: string,
  subTitle: string,
  bg: string,
}

const Card: React.FC<CardProps> = ({ img, title, subTitle, bg }) => {
  return (
    <div className={`${classes[bg]} ${classes.card}}`}>
      <div className={classes.imgWrapper}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.title}>{title} &rarr;</div>
      <div className={classes.subTitle}>{subTitle}</div>
    </div>
  )
}

export default Card