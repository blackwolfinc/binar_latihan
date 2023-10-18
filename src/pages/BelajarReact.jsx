import React from 'react'

export const BelajarReact = () => {
  // data array 
  let data = [
    {
      nama: "bagas",
      umur: 26
    },
    {
      nama: "bagas",
      umur: 26
    }
  ]


  // render component / mapping component (cuma berlaku pada data array)
  const renderList = () => {

    let dataProses = data
    dataProses.push("cantik banget sih")
    dataProses.push("cebelapa imut cih aku ")

    // apapun yang ada di dalam return akan di render / akan di tamplikan 
    return (
      dataProses.map((value) => {
        return <div>
          <h1 className='bg-slate-400 px-[1rem] py-[0.5rem] w-[15rem]'>{value.nama}</h1>
          <h1 className='bg-slate-400 px-[1rem] py-[0.5rem] w-[15rem]'>{value.umur}</h1>
        </div>
      })
    )
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col space-y-2'>
      {/* memangil fungsi */}
      {renderList()}
    </div>
  )
}

// buat 5 data yang berbrntuk 

let data = [
  {
    nama: "bagas",
    umur: 26
  },
  {
    nama: "bagas",
    umur: 26
  }
]