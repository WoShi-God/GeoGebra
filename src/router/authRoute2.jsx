import React from 'react'
import Students from '../students/admin';
import { Navigate } from 'react-router-dom'
export default function Student() {
   
  const token = localStorage.getItem('profession')
  const Student = token==='学生'? <Students/>:<Navigate to ='/login'/>

  return Student
}
