import React from 'react'
import style from './TaskList.module.scss'
import Task from '../Task/Task'
import Button from '../UI/Button/Button'

const TaskList = ({list, crud, ...props}) => {
  const listItems = Object.keys(list)
  const createTask = () => {
    props.openModal()
    props.setAction(crud.create)
  }
  
  return (
    <>
      {listItems.length
        ? <div className={style.wrapper}>
            <h2 className={style.title}>List of your tasks</h2>
            <div className={style.list}>
              {listItems.map((taskID, i) => {
                const task = {
                  text: list[taskID], 
                  id: taskID,
                  number: i+1, 
                }
                return <Task key={taskID} 
                  task={task}
                  crud={crud}
                  openModal={props.openModal}
                  setAction={props.setAction}  
                />
              })}
            </div>
            <button onClick={createTask} className={style.createMore}>
              <span></span>
            </button>
          </div>
        : <div className={style.wrapper}>
            <h2 className={style.title}>There are no tasks</h2>
            <Button onClick={createTask}>Add new task</Button>
          </div>
      }
    </>
  )
}

export default TaskList