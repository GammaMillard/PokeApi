'use client'
import { useState } from "react"
import PokeCard from "../components/PokeCard"
import { fetchData } from "../utilities/utilities"



const PokeList = ({ dataList, dataNext, dataPrevious }) => {
    const [list, setList] = useState(dataList)
    const [next, setNext] = useState(dataNext)
    const [previous, setPrevious] = useState(dataPrevious)
 
    const setStates = (res) => {
        setList(res.results)
        setNext(res.next)
        setPrevious(res.previous)
    }

    return (
        <> 
            <button onClick={async() => {
                const res = await fetchData(previous)
                setStates(res)
            }} className={`rounded-md p-2 hover:bg-pink-500 ${!previous ? 'hidden' : '' }`}>Anterior</button>
            <button onClick={async() => {
                const res = await fetchData(next)
                setStates(res)
            }} className="rounded-md p-2 hover:bg-pink-800 hover:text-white">Siguiente</button>
            <div>

                {
                    next && list.map(({ name }, i) => <PokeCard key={i} name={name} />)
                }

            </div>
        </>
    )
}

export default PokeList