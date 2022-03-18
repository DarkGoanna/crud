import React from 'react'
import style from './Task.module.scss'
import Button from '../UI/Button/Button'


const Task = ({task, number, ...props}) => {
  return (
    <div className={style.task}>
      <div>{number}</div>
      <div>{task}</div>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  )
}
export default Task