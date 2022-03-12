import React from 'react'
import styles from './styles.module.css'



export const Button = (props) => {
  return <button  className={props.type ? styles[`${props.type}`]: styles.default} >{props.children}</button>
}


