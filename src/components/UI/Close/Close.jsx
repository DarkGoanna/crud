import React from 'react'
import style from './Close.module.scss'

const Close = ({callback, ...props}) => {
  return (
    <button type='button' {...props} className={`${style.button} ${props.className}`}>
      <span></span>
      <span></span>
    </button>
  )
}

export default Close