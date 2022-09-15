import React from 'react'

import { PrevisionCard } from './PrevisionCard/PrevisionCard'

import './App.css'

export function App() {

  return (
    <div className='container-app'>
      <div className="header">
        <h1 id='header'> Consulte o clima de uma cidade 🌥️ </h1>
      </div>
        <PrevisionCard />
    </div>
  )
}
