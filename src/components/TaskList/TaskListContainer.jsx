import React, { useState } from 'react'
import TaskList from './TaskList'

const TaskListContainer = () => {
  const [list, setList] = useState({
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
  })

  const crud = {
    create: (newText) => setList(() => {
      const result = { ...list}
      const id = Date.now()
      result[id] = newText
      return result
    }),
    delete: (id) => setList(() => {
      let result = {}
      for (const task in list) {
        if (Object.hasOwnProperty.call(list, task)) {
          if (task !== id) {
            result[task] = list[task]
          }
        }
      }
      return result
    }),
    update: (id, newText) => setList(() => {
      let result = {}
      for (const task in list) {
        if (Object.hasOwnProperty.call(list, task)) {
          result = {
            ...result, 
            task: (task === id) ? newText : list[task],
          }
        }
      }
      return result
    })
  }

  return (
    <TaskList list={list} crud={crud}/>
  )
}

export default TaskListContainer