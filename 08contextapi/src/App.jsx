import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
   
  )
}

export default App
