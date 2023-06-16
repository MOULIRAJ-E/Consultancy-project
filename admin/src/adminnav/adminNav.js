import React from 'react'
import vasavilogo from "../images/vasavilogo.png"
import { NavLink } from 'react-router-dom'
import './adminnav.css'

export const AdminNav = () => {
  return (
    <div>
       <div class="area"></div><nav class="main-menu">
        <img src={vasavilogo}></img>
        <h3 style={{color:"white"}}>VASAVI MAHAL</h3>
            <ul>
                <li>
                    <NavLink to="/home">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                          Admin Dashboard
                        </span>
                    </NavLink>
                  
                </li>
                <li class="has-subnav">
                    <NavLink to="/addhotel">
                        <i class="fa fa-cutlery fa-2x"></i>
                        <span class="nav-text">
                           Add Nearby Hotels
                        </span>
                    </NavLink>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Reviews
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <NavLink to="/addevent">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                            Add Events
                        </span>
                    </NavLink>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                           Add Decorators
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Member Map
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Info
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </div>
  )
}
