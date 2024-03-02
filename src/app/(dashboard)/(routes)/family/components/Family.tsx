"use client"

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import DialogBox from './DialogBox';
// import { useNavigate } from 'react-router-dom';




const Family = () => {

  // const navigate = useNavigate();
  const family = [1, 2, 3];

  // const navigateToFamily = () => {
  //   navigate('/family/69');
  // };

  return (
    <div className='w-full mx-8 my-8'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='scroll-m-20 font-bold tracking-tight lg:text-5xl'>
            Family
        </h2>
        <DialogBox />
      </div>
      <div className='mt-8 grid grid-cols-3 gap-16'>
        {family.map((member, index) => (
          <div key={index}  className='w-[350px] h-[250px] flex flex-col justify-between dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md'>
            <div className="flex flex-row justify-between px-4 font-bold py-6 text-white dark:text-black w-[350px] h-[150px] bg-black dark:bg-white">
              <div className="w-16 h-16 bg-white dark:bg-black rounded-full"></div>
              <div>Name</div>
            </div>
            <div className='mx-2 my-2 flex flex-row justify-between font-semibold'>
            <div>user_id</div>
            <div>Relation</div>
            </div>
            <div className='flex flex-row justify-end mb-2 mr-2 gap-3'>
              <MdDownload size={27}/>
              <AiOutlineDelete size={27} /> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Family;