
import './App.css'
import Card from './components/Card'

function App() {
{/*let arr = [1,2,3,4,5] */}
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind css</h1>
      <Card username= "vijayvp" designation = "Software developer" location = "Remote" />
      <Card username = "vijay v pillai" designation = "fullstack developer" location = "Remote" />
      <Card username = "sachu" designation = "blockchain developer" location = "Remote"/>
     {/*<Card myarr = {arr}/>*/}
    </>
  )
}

export default App
