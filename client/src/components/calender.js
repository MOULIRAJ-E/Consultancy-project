import React, { useEffect,useState } from 'react';
import axios from "axios"
//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//jquery, popper.js libraries for bootstrap modal
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import $ from 'jquery';
 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick


export const Calender=()=>{
    const[event1,setEvent]=useState([])
    const [start, setStart] = useState("")
    const[list,setList]=useState([])
    useEffect(() => {
    axios.get("http://localhost:8000/api/book/getbooking").then((response)=>{
    const data=response.data.data
    console.log(response)
    setList(data)
  })
  .catch((err)=>console.log(err))
}, [])
console.log(list)
    // const li = list.map((x,index) => {
       
    //     return  (
    //     <FullCalendar
    //         plugins={[ dayGridPlugin, interactionPlugin ]}
    //         //Dayclick open sweetalert
    //         dateClick={function(arg) {
    //           $("#myModal").modal("show"); 
    //           $(".modal-body").html("");
    //           $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
    //         }}
    //         initialView="dayGridMonth"
    //         events={[
    //             { title: x.eventType, date:x.startDate}
    //           ]}
    //       />)
          
    //     } 
    // )
    // for (let i = 0; i < list.length; i++) {
    //     setEvent(...event,{title:list[i].eventType, date:list[i].startDate})      
    // }
  
    // list.map((x,index)=>(
    //   event1.push({title:x.eventType, date:x.startDate},)
    // ))
    // console.log(event1)

  return (
    <div className="MainDiv"> 
    <br></br>
    <br></br>
    <h2><u>SEE OUR BOOKINGS</u></h2>
       <div className="container">
         <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            //Dayclick open sweetalert
            dateClick={function(arg) {
              $("#myModal").modal("show"); 
              $(".modal-body").html("");
              $(".modal-body").html("<h3>"+arg.dateStr+"</h3>");
            }}
            initialView="dayGridMonth"
            events={
              list.map((x,index)=>(
                {title: "Booked" , date: x.startDate}
              ))
            }
          />
          {/* {li} */}
        </div>     
    </div>
  );
}
