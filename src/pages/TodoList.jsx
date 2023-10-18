import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { RenderList } from '../assets/components/renderList/RenderList'


export const TodoList = () => {
    // const axios = require('axios');

    // function 
    // function use effect akan berjalan jika 
    // ketika kita meggunakn use Effect maka semua yang ada di dalam function akan di
    // jalankan ketika pertama kali render
    const [DataAwal, setDataAwal] = useState([])
    const [LoadData, setLoadData] = useState([])
    const [DataSearch, setDataSearch] = useState("")
    const [Load, setLoad] = useState(false)

    const [Page, setPage] = useState("")

    const options = {
        method: 'GET',
        // core
        url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=99',
        headers: {
            accept: 'application/json',
            Authorization: ''
        }
    };


    //  api 1  - 10 detik 
    //  api 2  - 5 detik 
    //  api 3  - 5 detik 
    //  api 4  - 5 detik 

    // sycronus
    //  api 1 dijalankan proses 10 detik
    //  api 2


// asscyronus
    const getDataPokemon =  async () => {
        const data =  await axios.request(options)
        console.log(data)
        setPage(data.data.page , "data")
    }


// sycronus
    const getDataPokemon2 = () => {
       axios.request(options).then((result) => {
        console.log(result.data.page , "result ")
       }).catch((err) => {
        console.log(err , "ini konsole eror")
        alert(err.message)
       });
    }









    // component did mount = dimana function akan di jalankan ketika page tersebut di pertama kali buka 
    useEffect(() => {
        getDataPokemon2()

                // // dellay get 
                // setTimeout(() => {
                // getDataPokemon()
                // }, 1000);


                // // perulanagn yang bisa di sesuaikan per berapa detiknya
                // setInterval(() => {
                // // notifikasi 
                // // yang memerlukan data secara realtime 
                // // hardcode
                // console.log("ambil data ges")
                // // 
                // }, 10000);


                // 3000 = waktu delay 
    }, [])


    const filterData = (e) => {
        setLoadData(DataAwal.filter(valueFilter =>
       valueFilter.name.includes(DataSearch)))
    }


    // siapkan kunci
    return (
        <div className='relative'>
            {!Load && <div className='w-screen h-screen bg-red-300'>loading</div>}
            <div className='mb-[1rem]'>
                <h1>Tittle {Page}</h1>
                <input className='border' onChange={(e) => { setDataSearch(e.target.value) }} />
            </div>
            <button onClick={() => { filterData() }}>Search</button>
            <div className='flex flex-wrap'>
            {LoadData.map((value, index) => {
                return <RenderList key={index} setData={setLoadData} dataPokemon={value} DataAll={LoadData} />
            })}
            </div>
        </div>
    )
}
