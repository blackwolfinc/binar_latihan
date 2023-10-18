import React, { useState } from 'react'
import { useCreateUser } from '../../services/auth/register_user'

export const Register = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const { mutate: regiterUser, isSuccess, error } = useCreateUser()

    const handleInput = (e) => {
        if (e) {
            if (e.target.id === "username") {
                setUsername(e.target.value)
            }
            if (e.target.id === "email") {
                setEmail(e.target.value)
            }
            if (e.target.id === "password") {
                setPassword(e.target.value)
            }
        }
    }

    if (error) {
        console.log(error.response.data.message , "ini Eror gess"
        )
    }

    const registerUser = () => {
        regiterUser({
            "email": Email,
            "name": Username,
            "password": Password
        })
    }
    console.log("asdlkasjdlkjasld")

    return (
        <div>
            <input onChange={handleInput} id='username' className='border' type='text' />
            <input onChange={handleInput} id='email' className='border' type='email' />
            {/* <input onChange={handleInput} id='password' className='border' type='password' /> */}
            <button onClick={() => { registerUser() }}>register</button>
        </div>
    )
}
