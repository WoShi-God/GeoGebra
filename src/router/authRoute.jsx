import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Teachers from "../teachers/admin";


export default function authRoute() {
  const token = localStorage.getItem('profession')
  
  const Teacher = token==='老师'? <Teachers/>:<Navigate to ='/login'/>
 



  // const [Data,setData] = useState([])
  // useEffect(()=>{
  //   const value = localStorage.getItem('_id')
  //   axios.get('http://localhost:3000/route',value).then(res=>{
  //       console.log(res.data);
  //       setData(res.data.ok)
  //   })
  // })
 
    // const Student = token?<Student/>:<Navigate to = '/login'/>

  return  Teacher
  
}
