import React from 'react'
import './style/style.css'
import TaskList from './components/TaskList/TaskListContainer'

function App() {
  return (
    <div id="app">
      <div className='container'>
        <TaskList />
      </div>
    </div>
  )
}

export default App
