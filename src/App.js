import React from 'react'
import './App.css'
import { PomodoroTimer } from './features/PomodoroTimer/PomodoroTimer'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PomodoroTimer />
      </header>
    </div>
  )
}

export default App
