import React from 'react'
import style from './Task.module.scss'
import Button from '../UI/Button/Button'


const Task = ({task, crud, ...props}) => {
  return (
    <div className={style.task}>
      <div>{task.number}</div>
      <div>{task.text}</div>
      <Button onClick={()=>{crud.update(task.id, 'lol')}}>Edit</Button>
      <Button onClick={()=>{crud.delete(task.id)}}>Delete</Button>
    </div>
  )
}
export default Task