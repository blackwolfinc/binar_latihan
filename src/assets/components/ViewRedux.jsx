import React from 'react'
import { useSelector } from 'react-redux'

export const ViewRedux = () => {

  const Data = useSelector((state) => state.EmberBagas)

  return (
    <div>
     <h1>Baju Kotor : {Data.bajukotor}</h1>
      <h1>detergen : {Data.detergen}</h1>
     <h1>air : {Data.air}</h1>
    </div>
  )
}
