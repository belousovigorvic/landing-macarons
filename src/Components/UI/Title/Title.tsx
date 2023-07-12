import React from 'react'
import classes from './Title.module.css'
type TitleProps = {
  text: string
}

const Title:React.FC<TitleProps> = ({text}) => {
  return (
    <div className={classes.title}>{text}</div>
  )
}

export default Title