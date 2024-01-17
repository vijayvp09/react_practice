import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex flex-wrap 
    justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      
    </div>
    
  )
}

export default App
