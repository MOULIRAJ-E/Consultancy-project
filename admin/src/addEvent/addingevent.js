import React,{useState} from 'react'
import axios from "axios"
// import './addhotel.css'
export const AddEvent = () => {
  const[eventname,setEventName]=useState("");
  const [start,setStart] = useState()
  const[end,setEnd]=useState()
  const[capacity,setCapacity]=useState("")
  const[dining,setDining]=useState("")
  const[assistance,setAssistance]=useState("")
  const submit=(e)=>{
      e.preventDefault();
      let s="";
      s=start.toString();
      let en="";
      en=end.toString();
      console.log(s)
      console.log(en)
      console.log(dining)
      const addEvent=async()=>{
        const response=await axios.post("http://localhost:8000/api/book/",{
            eventType:eventname,
            startDate:s,
            endDate:en,
            capacity:capacity,
            dining:dining,
            extraAssistance:assistance,
        })
        console.log(response);
      }
      addEvent();
  }
return(
    <div>
      <form onSubmit={submit}>
        
        <h1 className='addhead'>ADD EVENT</h1>
        
        <fieldset>
          
          <legend><span class="number"></span> Enter the Event Details</legend>
          
          <label >Event Name:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setEventName(e.target.value)} />
          
          
          <label >Start Date:</label>
          <input type="date" className="addhotelinp"  onChange={(e)=>setStart(e.target.value)} />
          
          <label >End Date:</label>
          <input type="date" className="addhotelinp" onChange={(e)=>setEnd(e.target.value)}/>

          <label >Capacity:</label>
          <input type="text" className="addhotelinp" onChange={(e)=>setCapacity(e.target.value)} />
          
          <label>Dining:</label>
          <select id="job"  onChange={(e)=>setDining(e.target.value)}>
              <option value="true">Required</option>
              <option value="false">Not Required</option>
          </select>
          <label for="job">Extra Assistance:</label>
          <select id="job" onChange={(e)=>setAssistance(e.target.value)}>
              <option value="true">Required</option>
              <option value="false">Not Required</option>
          </select>
        </fieldset>
          
        {/* <button type="submit">Sign Up</button> */}
        <button class="button-1" role="button">Add Event</button>
        
      </form>
    </div>
  )
}
