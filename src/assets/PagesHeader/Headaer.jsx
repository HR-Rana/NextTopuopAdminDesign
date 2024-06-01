import React from 'react'
import { FaBars } from "react-icons/fa";


export default function Headaer({title, func}) {
  return (
    <div className='rounded-md shadow-md h-[70px] w-[100%] relative p-3 bg-slate-50'>
        <div className='flex justify-between'>
            <span className='flex items-center'><FaBars className='cursor-pointer' onClick={(e)=>{func()}} /></span>
            <h5>{title}</h5>
        </div>
    </div>
  )
}
