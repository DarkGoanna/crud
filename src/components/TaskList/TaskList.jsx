import React, { useState } from 'react'
import style from './TaskList.module.scss'
import Task from '../Task/Task'
import Button from '../UI/Button/Button'

const TaskList = () => {
  const [list, setList] = useState({})
  const listKeys = Object.keys(list)

  const add = (newText) => setList(() => {
    const id = Date.now()
    return { ...list, id: newText}
  })
  
  return (
    <>
      {listKeys.length
        ? <>
            <h2 className={style.title}>List of your tasks</h2>
            {listKeys.map((task, i) => {
              return <Task task={list[task]} number={i+1} key={list[task]}/>
            })}
          </>
        : <>
            <h2 className={style.title}>There are no tasks</h2>
            <Button onClick={() => {add('hi')}}>Add new task</Button>
          </>
      }
    </>
  )
}

export default TaskList