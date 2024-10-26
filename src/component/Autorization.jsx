import React,{useState} from 'react'
import { Navigate } from "react-router-dom";


function Autorization() {
    
    const [navigate,setNavigate] = useState(false)
   

    const handleSUbmit = () => {
        setNavigate(true)
    }

    if(navigate){
        return < Navigate to='/adminpage' />
    }
  
  
  return (


    <div>
        <form onSubmit={handleSUbmit}>
            <input type="email" name="email" placeholder='email' />
            <input type="password" name="password" placeholder='password' />
            <button type='submit'>sign in</button>
        </form>
    </div>
  )
}

export default Autorization