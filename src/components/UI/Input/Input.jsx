import React from 'react'
import style from './Input.module.scss'

const Input = (props) => {
  return (
    <>
      <input {...props}  className={style.input}/>
    </>
  )
}

export default Input