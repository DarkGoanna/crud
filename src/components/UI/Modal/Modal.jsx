import React from 'react'
import Close from '../Close/Close'
import style from './Modal.module.scss'

const Modal = (props) => {
  return (
    <div className={style.wrapper} onMouseDown={props.closeModal}>
      <div className={style.inner} onMouseDown={event => event.stopPropagation()}>
        <Close className={style.close} onClick={props.closeModal}/>
        <div className={style.content}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal