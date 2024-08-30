import React ,{useMemo , createContext,useContext} from 'react'
import {io} from 'socket.io-client'

const SocketContext = React.createContext(null)

export const useSocket=()=>{
    return React.useContext(SocketContext)
};

export const SocketProvider=(props)=>{
    const Socket=useMemo(()=>io({
        host: 'http://localhost:8001',
    }),
    []
);
    return(
        <SocketContext.Provider>
            {props.children}
        </SocketContext.Provider>
    )
}