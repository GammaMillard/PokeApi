'use client'
import { useEffect, useState } from "react"

const Test = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
//     const [inputs, setInputs] = useState({})
      
//    const handleChangeObject = (e) => {
//     const holdInputs = inputs
//     holdInputs[e.target.name] = e.target.value
//     setInputs(prev => ({...prev, ...holdInputs}))
//    }

   const changeName = (e) => {
    setName(e.target.value)
   }
   const changeLastName = (e) => {
    setLastName(e.target.value)
   }
   const changeAge = (e) => {
    setAge(e.target.value)
   }

   

    return (
        <div className="min-h-screen flex flex-col gap-20 justify-center items-center bg-red-300">
           <form action="" className="flex flex-col gap-3">
            <label htmlFor="">Nombre</label>
            <input onChange={changeName} className="py-1 px-3" type="text" name="name" id="name" value={name}/>
            <label htmlFor="">Apellido</label>
            <input onChange={changeLastName} className="py-1 px-3" type="text" name="lastName" id="lastName" value={lastName}/>
            <label htmlFor="">Edad</label>
            <input onChange={changeAge} className="py-1 px-3" type="text" name="age" id="age" value={age} />
            </form> 

            <ul className="p-5 bg-white text-xl rounded-md grid place-content-center">
                <li>{name}</li>
                <li>{lastName}</li>
                <li>{age}</li>
            </ul>
        </div>
    )
}

export default Test