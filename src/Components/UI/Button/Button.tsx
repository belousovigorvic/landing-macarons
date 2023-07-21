import React from 'react'
import classes from './Button.module.css'

type ButtonType = {
    children: string
}

const Button:React.FC<ButtonType> = ({children}) => <button className={classes.button}>{children}</button>

export default Button