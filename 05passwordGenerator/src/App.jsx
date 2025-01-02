import { useCallback, useState ,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const[password,setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator =useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="'!@#$%^&*()_+~`[]{}"

    for(let i =1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char)
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copy2clip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},
  [length,numAllowed,charAllowed,passwordGenerator])

  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 mt-8 text-orange-400 bg-gray-700'>
          <h1 className='text-center text-4xl p-4 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           placeholder='password'
           className='outline-none w-full py-1 px-3' 
           readOnly
           ref={passwordRef}/>
           <button 
           onClick={copy2clip}
            className='text-white bg-blue-600 px-4'>
              Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput' >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
