import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username :"Abhishek",
    age:21
  }

  return (
    <>
    <h1 className='bg-orange-400 text-black font-bold p-4  rounded-xl mb-4'>Jai Shree Ram</h1>
      <Card username ="Santosh" btnText={"Press here"} />
      <Card username={"Suraj"} btnText={"ashiq"}/>
    </>
  )
}

export default App
