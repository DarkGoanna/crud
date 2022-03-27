import React, { useState } from 'react'
import TaskList from './TaskList'
import Modal from '../UI/Modal/Modal'
import Textarea from '../UI/Textarea/Textarea'
import Button from '../UI/Button/Button'

const TaskListContainer = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const [taskConfig, setTaskConfig] = useState({ inputValue: '',})
  const [list, setList] = useState({
    1: 'Update some of tasks',
    2: 'Delete some of tasks',
    3: 'Create a new task',
  })

  const openModal = () => {setModalStatus(true)}
  const closeModal = () => {setModalStatus(false)}

  const setAction = (action, actionArgs) => {
    setTaskConfig(() => {
      const newTaskConfig = {
        ...taskConfig,
        action, 
      }
  
      switch (action) {
        case crud.create:
          newTaskConfig.inputPlaceholderValue = 'Create new task'
          newTaskConfig.inputValue = ''
          newTaskConfig.actionArgs = []
          break
        case crud.update:
          newTaskConfig.inputPlaceholderValue = 'Update this task'
          newTaskConfig.inputValue = actionArgs[0]
          newTaskConfig.actionArgs = actionArgs
          break
      }

      return newTaskConfig
    })
  }
  const callAction = () => {
    taskConfig.action.apply(crud, taskConfig.actionArgs)
    closeModal()
  }
  const setInputValue = (event) => {
    const actionArgs = [...taskConfig.actionArgs]
    actionArgs[0] = event.target.value

    setTaskConfig({ ...taskConfig, 
      inputValue: event.target.value,
      actionArgs: actionArgs,
    })
  }

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
    update: (newText, id) => setList(() => {
      let result = {}
      for (const task in list) {
        if (Object.hasOwnProperty.call(list, task)) {
          result[task] = (task === id) ? newText : list[task]
        }
      }
      return result
    })
  }

  return (
    <>
      <TaskList list={list} 
        crud={crud}
        openModal={openModal}
        setAction={setAction}
      />
      {modalStatus && 
        <Modal closeModal={closeModal}>
          <Textarea type="text" 
            value={taskConfig.inputValue} 
            placeholder={taskConfig.inputPlaceholderValue}
            onChange={setInputValue}
          />
          <Button onClick={callAction}>Submit</Button>
        </Modal>
      }
    </>
  )
}

export default TaskListContainer