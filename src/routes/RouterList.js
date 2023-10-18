import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RumahA1 } from '../pages/RumahA1'
import { RumahA2 } from '../pages/RumahA2'
import { Gerbang } from '../pages/Gerbang'
import { TodoList } from '../pages/TodoList'
import { BelajarReact } from '../pages/BelajarReact'
import { MovieList } from '../pages/MovieList'
import { Home } from '../pages/halamanRouter/Home'
import { Dashboard } from '../pages/halamanRouter/Dashboard'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'

export const RouterList = () => {
  return (
    // perumahan puri permata 
    <BrowserRouter>
    {/* Block perumahan A-C */}
        <Routes>
        {/* Rumah A1-A5 */}
        {/* default pas pertama kali mau masuk kavling */}
            <Route path='/' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<LoginPage/>}/>

            {/* masuk ke dalam kavling */}
            <Route path='/A1' element={<RumahA1/>}/>
            <Route path='/A2' element={<RumahA2/>}/>
            <Route path='/A3'/>
            <Route path='/A4'/>
            <Route path='/A5'/>
        </Routes>
    </BrowserRouter>
  )
}
