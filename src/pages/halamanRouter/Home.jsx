import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CookieStorage } from '../../utils/cookies';

export const Home = () => {
    let dataC = CookieStorage.set()


    const navigate = useNavigate();
    const [ID, setID] = useState("avatar")


    const pindahAlam = () => {
        // state
        navigate("/dashboard", {
            state: {
                IdMovie: ID,
            },
        });

        //   navigate(`/dashboard?idData=${ID}`);
    }

    const data = [{ id: 3234 }, { id: 123123 }]

    const renderData = () => {

        return data.map((value, key) => {
            return <div className='bg-red-300 w-[10rem] h-[10rem]' key={key} onClick={() => {
                navigate("/dashboard", {
                    state: {
                        IdMovie: value.id,
                    },
                });
            }}>
            {value.id}
            </div>
        })

    }


    return (
        <div>
            <div className='bg-red-300 w-[10rem] h-[10rem]'>loping</div>
            {renderData()}
            <button onClick={() => { pindahAlam() }}>pindah</button>
        </div>
    )
}
