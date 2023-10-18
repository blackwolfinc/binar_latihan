import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import { RenderList } from '../assets/components/renderList/RenderList'
import { useMovieDataQuery } from '../services/get-data-movie'
import { useMovieDataQueryDetail } from '../services/get-data-movie-detail'

export const MovieList = () => {


    const [PageNow, setPageNow] = useState(1)
    const [ID, setID] = useState("980489")

    // const { data: fetchUser, refetch: refetchUser } = useMovieDataQuery(PageNow);

    const { data: paijoSalto   } = useMovieDataQueryDetail({
        id : ID
    })


    console.log(paijoSalto , "paijoSalto")


    return (
        <div onClick={()=>{}} className='relative'>
            <h1>{PageNow}</h1>
            <button onClick={() => {
                setPageNow(PageNow + 1)
            }}>Plus</button>
            <br/>
            <button  onClick={() => {
                setID("980488")
            }}>wsdasdassd</button>?
        </div>
    )
}
