import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import styles from '../css/nearbyhotel.module.css'

export const Nearbyhotel = () => {
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/add/gethotel")
        .then((response)=>{
          const data=response.data.data
          console.log(response)
          setlist(data)
          console.log("data received");
        })
        .catch((err)=>console.log(err))
    }, [])
    console.log("4");
    console.log(list);
    const li = list.map((x,index) => {

      return  (<div key={index} className={styles.event}>
               <h3>{x.hotel_name}</h3>
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Flifestyle%2Ffood-best-indian-restaurants-in-the-usa-you-cannot-miss-to-try-648789&psig=AOvVaw2xqHP2ekCiYiwwTx2vk07m&ust=1683015993947000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOi_qanZ0_4CFQAAAAAdAAAAABAY" alt='img1'/>
              <p>{x.location}</p>
              </div>)
      }
  );
  return (
    <div className={styles.Types_of_Events}>
        {li}
    </div>    
  )
}
