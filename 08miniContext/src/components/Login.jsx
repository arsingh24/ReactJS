import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")


    const {setUser} = useContext(UserContext)

    const submitHandler =(e)=>{
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text" 
      onChange={(e)=>setUsername(e.target.value)}
      value={username} 
      placeholder='username'
      />
      <input 
      type="password" 
      onChange={(e)=>setPassword(e.target.value)}
      value={password} 
      placeholder='password'
      />
      <button
      onClick={submitHandler}
      >Submit</button>
    </div>
  )
}

export default Login
