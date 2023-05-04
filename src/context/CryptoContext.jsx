import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const Crypto = createContext()

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("INR")
    const [selectedCoin, setSelectedCoin] = useState({name:"",current_price:null,image:null, sym:"Crypto"})
  return (
    <Crypto.Provider value={{currency, setCurrency, selectedCoin, setSelectedCoin}}>{children}</Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = ()=>{
    return useContext(Crypto)
}