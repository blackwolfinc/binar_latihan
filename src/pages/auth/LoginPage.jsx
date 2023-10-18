import React, { useState } from 'react'
import { useLoginUser } from '../../services/auth/login_user'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

export const LoginPage = () => {
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const { mutate: regiterUser, isSuccess, error, data } = useLoginUser()

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value)
      }
      if (e.target.id === "password") {
        setPassword(e.target.value)
      }
    }
  }

  if (isSuccess && data) {
    localStorage.setItem("token", data.data.data.token);
    sessionStorage.setItem("token", data.data.data.token);
  }

  if (error) {
    console.log(error.response.data.message, "ini Eror gess"
    )
  }

  const registerUser = () => {
    regiterUser({
      "email": Email,
      "password": Password
    })
  }

  return (
    <div>
      <input onChange={handleInput} id='email' className='border' type='email' />
      <input onChange={handleInput} id='password' className='border' type='password' />
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
      <button onClick={() => { registerUser() }}>login</button>
    </div>
  )
}
