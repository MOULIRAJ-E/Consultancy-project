import React,{useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
const AuthContext=React.createContext()
export const AuthenticationProvider = (props) => {
    const navigate=useNavigate();
    const [user,setUser]=useState("")
    const[contact,setContact]=useState("")
    const login=(name,phno)=>{
        setUser(name)
        setContact(phno)
    }
    const logout=()=>{
        setUser('')
        navigate('/')
    }

  return (
        <AuthContext.Provider value={{user,contact,login,logout}} >
            {props.children}
        </AuthContext.Provider>
  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}