import React from 'react'

export default function SignUp() {
  return (
    <div className='auth-container'> 
    <form className='form'>
      <h1 className='form-title'>Blog app</h1>  
      <h2 className='form-sub-title'>Sign Up</h2>

      <div className='inputs-container'>
        <input className='form-input' placeholder='Enter First Name' type="text" />
        <input className='form-input' placeholder="Enter last name" type="text" />
        <input className='form-input' placeholder="Enter email" type="email" />
        <input className='form-input' placeholder="Enter password" type="password" />
        <input className='form-input' placeholder="Confirm password" type="password" />
      </div>

    <button className='submit-button'>Sign up</button>
    <p className='form-info'>Already have an account? <span>Log in here</span> </p>
    </form>  
    </div>
  )
}
