import { useEffect,useCallback,useState} from "react";
import React from 'react';
import {useSocket} from '../context/SocketProvider';


const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null)

  const handleUserJoined = useCallback(({email,id}) => {
    console.log(`Email ${email} joined with id ${id}`)
    setRemoteSocketId(id)
  }, [])
  useEffect(() => {
    socket.on('user:joined', handleUserJoined)
    return () => {
      socket.off('user:joined', handleUserJoined)
    }
  }, [socket, handleUserJoined])

  return (
    <div className="">
      <h1>RoomPage</h1>
      <h4>{remoteSocketId?`Connected` :"No one in room"}</h4>
      
    </div>
  )
}

export default RoomPage