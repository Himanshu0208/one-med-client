"use client"

import React from 'react'

import { FaLink } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


const Profile = () => {
  return (
    <div className='w-full mx-8 my-8'>
       <div className='flex flex-row items-center justify-between'>
          <h2 className='scroll-m-20 font-bold tracking-tight lg:text-5xl'>
            Profile
          </h2>
          <div className='flex flex-row gap-3'>
            <FaPencil className='w-8 h-8'/>
            <FaLink className='w-8 h-8'/>
          </div>
       </div>
       <div className='mt-4 flex flex-row pr-4'>
          <div className='bg-black dark:bg-white w-40 h-40 rounded-full'></div>
          <div className='ml-40'>
            <div className='scroll-m-20 text-2xl font-semibold tracking-tight'>General Info</div>
            <div className='mt-4'>Id : user_id</div>
            <div>Name : User Name</div>
            <div>gender : gender</div>
            <div>email  : email</div>
          </div>

       </div>
    </div>
  )
}

export default Profile
