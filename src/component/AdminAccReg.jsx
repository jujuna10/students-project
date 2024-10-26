import React, { useState } from 'react'
import { Navigate } from "react-router-dom";


function AdminAccReg() {
  const [acc,setAcc] = useState({
    name:"",
    email:"",
    password:""
  })

  const [navigate,setNavigate] = useState(false)

 

  const handleSubmit = (e) => {
    e.preventDefault()
    setAcc({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    })
    saveData()

  }

  const saveData = (e) => {
    localStorage.setItem("account",JSON.stringify(acc))
    alert("saved")
    setNavigate(true)
  }

  if(navigate){
    return <Navigate to='/auto' />
  }

  return (
    <div>
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='name'/>
            <input type="email" name="email" placeholder='email'/>
            <input type="password" name="password" placeholder='password' />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default AdminAccReg