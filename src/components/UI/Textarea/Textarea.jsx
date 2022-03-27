import React, { createRef, useState } from 'react'
import style from './Textarea.module.scss'

const Textarea = (props) => {
  const textarea = createRef()
  const [height, setHeight] = useState('auto')

  const changeHeight = () => {
    const height = textarea.current.scrollHeight
    setHeight(`${height}px`)
  }

  return (
    <>
      <textarea {...props}  
        className={style.textarea}
        ref={textarea} 
        style={{height: height}}
        onInput={changeHeight}
        onFocus={changeHeight}
      />
    </>
  )
}

export default Textarea