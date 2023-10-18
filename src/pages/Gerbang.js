import React from 'react'
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';

export const Gerbang = () => {

    const navigate = useNavigate();
    let umur = 3
    let location = useLocation();


    const pindah = () => {
        if (umur == 10) {
            navigate("A1")
        }

    }

    console.log(location , "location")




    
    return (
        <div className='flex justify-center items-center h-screen'>   
            <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black w-[10rem] h-[5rem]'> ini card</div>
        </div>
    )
}
