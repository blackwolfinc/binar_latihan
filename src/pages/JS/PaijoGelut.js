import React, { useEffect, useState } from 'react'

export const PaijoGelut = () => {

    const [Nama, setNama] = useState("")
    const [Umur, setUmur] = useState(0)

    // valdiasi frsit load 
    const [FristLoad, setFristLoad] = useState(false)


    // LIFECYCLE'

    // Mounting (compoenents DidMount )  = dia akan di jalankan ketika render pertama kali 
    useEffect(() => {
        if (!FristLoad) {
            setUmur(99)
            setFristLoad(true)
        }


    }, [ Nama ])
     // Update (compoenents didUpdate )  = ketika value nama di ganti maka yang ada dalam use effect akan ter trriger


    return (
        <div className='' id='' >
            <h1>{Nama}</h1>
            <h2>{Umur}</h2>
            <button onClick={() => { setUmur(Umur + 1) }}>Button Penambah Tua</button>
            <button onClick={() => { setNama("naruto") }}>Perubah nama</button>

            {/* on Change  */}
            <input onCopy={() => { alert("bapak salto") }} onChange={(e) => { setNama(e.target.value) }} />
            <textarea onChange={(e) => { setNama(e.target.value) }}></textarea>
            <select onChange={(e) => { setNama(e.target.value) }}>
                <option value="bejo">bejo</option>
                <option value="Tutik">Tutik</option>
            </select>


            <img onClick={() => { alert("panjang umur ya kek ") }} src='https://asset.kompas.com/crops/yo6Kh0zayJ4pdQbo_JqS7A-Dv48=/0x0:1080x720/750x500/data/photo/2019/06/18/3897062279.jpeg'></img>
            <h1 onClick={() => { setNama("sakura") }}>teess</h1>
            <div onClick={() => { setNama("sasuke") }}>tewewe</div>
            <hr onClick={() => { setNama("naruto") }} />
        </div>
    )
}






