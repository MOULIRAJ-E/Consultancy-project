import React from 'react'
import { useAuth } from './utils/Authentication'
import style from "../css/profile.module.css"
export const Profile = () => {
  const auth=useAuth()
  const logout=()=>{
    auth.logout()
  }
  return (
    <div>

    <div className={style.profile}>
      <h2> Hii {auth.user}!! </h2>  
      <p>Contact:{auth.contact}</p>
    </div>
    <button onClick={logout}>Logout </button>
    </div>
  )
}
