import React from 'react'
import style from './TaskList.module.scss'
import Task from '../Task/Task'
import Button from '../UI/Button/Button'

const TaskList = ({list, crud, ...props}) => {
  const listItems = Object.keys(list)
  return (
    <>
      {listItems.length
        ? <>
            <h2 className={style.title}>List of your tasks</h2>
            <div className={style.list}>
              {listItems.map((taskID, i) => {
                const task = {
                  text: list[taskID], 
                  id: taskID,
                  number: i+1, 
                }
                return <Task key={taskID} task={task} crud={crud} />
              })}
            </div>
          </>
        : <>
            <h2 className={style.title}>There are no tasks</h2>
            <Button onClick={() => {crud.create('hi')}}>Add new task</Button>
          </>
      }
    </>
  )
}

export default TaskList