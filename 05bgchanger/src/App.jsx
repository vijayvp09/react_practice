import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className='w-full h-screen duration-1000 ' style={{backgroundColor: color}}>
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('lightgreen')} 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'lightgreen'}}
          >green</button>
          <button onClick={() => {setColor('skyblue')}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'skyblue'}}
          >Blue</button>
          <button onClick={()=> {setColor('pink')}} 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'pink'}}
          >Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
