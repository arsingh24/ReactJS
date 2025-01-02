import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [count, setCount] =useState(0);
  // let count = 15;
  let addValue = ()=>{
    if(count<20){
      // setCount(20)
      setCount(count+1)
    }
    // else{
    // }
    
  }
  let subValue = ()=>{
    if(count<0){
      // setCount.freeze();
    }
    else{
      setCount(count--);
    }
  }
  return (
    <>
     <h1>Vande MAtrama</h1>
     <h2>Count is :{count} </h2>
     <button onClick={addValue} >Add Value</button>
     <br />
     <button onClick={subValue} >Remove Value</button>
    </>
  )
}

export default App
