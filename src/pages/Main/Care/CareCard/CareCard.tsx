import React from 'react'
import classes from './CareCard.module.css'

type CareCardProps = {
  img: string
  title: string
  text: string
}

const CareCard: React.FC<CareCardProps> = ({ img, title, text }) => {
  return (
    <div className={classes.CareCard}>
      <img className={classes.CareCard__img} src={img} alt="img" />
      <p className={classes.CareCard__title}>{title}</p>
      <p className={classes.CareCard__text}>{text}</p>
    </div>
  )
}

export default CareCard
