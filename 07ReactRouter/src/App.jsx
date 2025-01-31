import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-red-800 text-'>Hey ry Mogaimo</h1>
   <Header/>
   </>
  )
}

export default App
