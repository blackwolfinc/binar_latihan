import React from 'react'

// props
export const RenderList = (props) => {

  const deletePokemon=()=>{
    props.setData(
      props.DataAll.filter( valueFilter =>
            valueFilter.name !== props.dataPokemon.name )
    )
  }

  return (
    <div className='w-[20rem] h-f bg-gray-50 m-4'>
      <span className='  px-[2rem] py-[0rem] '>{props.dataPokemon.title}</span>
      <img src={`https://image.tmdb.org/t/p/original/${props.dataPokemon.backdrop_path}`}></img>
    </div>
  )
}
