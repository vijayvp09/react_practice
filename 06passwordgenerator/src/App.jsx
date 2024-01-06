import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    
    for(let i=1; i< length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
      <h1>Password Generator</h1>
      <div className="flex">
        <input 
        type="text"
        value={password}
        placeholder="Password"
        readOnly
        ref={passwordRef}></input>
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex align-items-center gap-x-1'>
          <input 
          type="range" 
          value={length}
          min={6} 
          max={20} 
          onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label htmlFor="range">length: {length}</label>
        </div>
        <div 
        className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div
        className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="charInput">Char</label>
        </div>
      </div>  
    </>
  )
}

export default App
