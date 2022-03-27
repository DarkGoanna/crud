import React from 'react'
import style from './Task.module.scss'
import Button from '../UI/Button/Button'

const Task = ({task, crud, ...props}) => {
  const updateTask = () => {
    props.openModal()
    props.setAction(crud.update, [task.text, task.id])
  }
  return (
    <div className={style.task}>
      <div className={style.number}>{task.number}</div>
      <div className={style.content}>{task.text}</div>
      <Button onClick={updateTask}>Update</Button>
      <Button onClick={()=>{crud.delete(task.id)}}>Delete</Button>
    </div>
  )
}
export default Task