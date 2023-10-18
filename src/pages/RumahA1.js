import React from 'react'
import { useLocation } from 'react-router-dom';

export const RumahA1 = () => {
    let location = useLocation();

    return (
        <div className='rumah1'>RumahA1
           <br />
           <input></input>
            <a href='/'>{location == "aku " ?"" :""}</a>
            <a href='/A2'>rumah a2</a>
        </div>
    )
}
