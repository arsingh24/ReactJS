import { useState,useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  function copy2clipboard(){
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
  }

  const passwordGenerator = useCallback(()=>{

    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";
    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&~_-+={}[]`*?/"

    for(let i = 1; i <= length; i++ ){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword] )

  useEffect(()=>{
    passwordGenerator()

  },[length,numAllowed,charAllowed,passwordGenerator])  

  return (
   
    <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 bg-slate-700 text-orange-500'>
      
      
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        placeholder='Password'
        className='outline-none w-full bg-white py-1 px-3'
        readOnly
        ref={passwordRef} />

        <button
        onClick={copy2clipboard}
        className='outline-none bg-blue-700 text-white 
        px-3 py-0.5 shrink-0 hover:bg-blue-500 hover:text-black cursor-pointer'
        >Copy</button>
      </div>


      <div className='flex text-sm gap-x-2 flex-wrap'>
        <div className='flex items-center gap-x-1 flex-wrap'>
          <input
           type="range"
           min={6}
           max={100}
           value={length} 
           className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label htmlFor="">Length:{length}</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={()=>{
            setnumAllowed((prev)=>!prev)
          }} />
          <label htmlFor="numberInput">Number</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id="charcterInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }} />
          <label htmlFor="charcterInput">Charcter</label>
        </div>
      </div>
    </div>
  
  )
}

export default App
