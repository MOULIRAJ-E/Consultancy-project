import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/home.css'
import mandapam from '../images/mandapam1.jpg'
import marriage from '../images/marraige.jpg'
import concerts from '../images/concerts.jpg'
import meetings from '../images/meetings.jpg'
import { Calender } from './calender'
import { Link } from 'react-router-dom'
import { Footer } from './footer'
import { Qr } from './qr'
export const Home = () => {
    const navigate=useNavigate();
    const explore=()=>{
        navigate('/explore')
    }
  return (
    <div>
    <div className='containe'>
    <img src={mandapam}></img>
    <div className="text-overlay">
    <button onClick={explore} className="home-but"> Explore Now !!</button>
    </div>
    </div>
    <div className='cal'>
        <Calender/>
    </div>
    <div className='gap'>
    <h1>Types of Events</h1>
    <div className='Types_of_Events'>
        <div className='event'>
            <h3>WEDDINGS</h3>
            <img src={marriage}/>
            <br></br>
            <br></br>
            <p><i>"A happy marriage is the union of two good forgivers." - Ruth Bell Graham</i></p>
        </div>
        <div className='event'>
            <h3>MEETINGS</h3>
            <img src={meetings}/>
            <br></br>
            <br></br>
            <p><i>"A meeting is an event at which the minutes are kept and the hours are lost." -Unknown</i></p>
        </div>
        <div className='event'>
            <h3>CONCERTS</h3>
            <img src={concerts}/>
            <br></br>
            <br></br>
            <p><i>"Music is the art which is most nigh to tears and memories." - Oscar Wilde</i></p>
        </div>
    </div>
    </div>
    <Qr/>
    <Footer/>
    </div>
  )
}
