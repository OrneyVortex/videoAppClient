import React from 'react'
import { useState,useCallback } from "react"

const LobbyScreen = () => {
    const [email, setEmail] = useState('')
    const[roomCode, setRoomCode] = useState('')
    const handleSubmitForm=useCallback((e)=>{
        e.preventDefault()
        console.log(email)
        console.log(roomCode)

    })

  return (
    <div className='h-screen w-screen flex justify-center bg-slate-300 items-center'>
      <div className='text-2xl'>
        <h1>LOBBY SCREEN</h1>


        <form onSubmit={handleSubmitForm}>

        <input
          type="email"
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email here'
          className='block mb-4 p-2 border rounded'
          />
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          placeholder='Enter room code'
          className='block mb-4 p-2 border rounded'
          />
        <button className='block bg-slate-500 text-white p-2 rounded'>
          Enter room
        </button>
          </form>
      </div>
    </div>
  )
}

export default LobbyScreen