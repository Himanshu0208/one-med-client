"use client"

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog';
import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { MdDownload } from "react-icons/md";


const Records = () => {

  const records = [1, 2, 3];
  
  return (
    <div className='w-full mx-8 my-8'>
      <div className='flex flex-row items-center justify-between'>
        <h2 className='scroll-m-20 font-bold tracking-tight lg:text-5xl'>
          Records
        </h2>
        <Button>+ Add Record  </Button>
      </div>
      <div className='mt-8 grid grid-cols-3 gap-16'>
        {records.map((record, index) => (
          <div key={index} className='w-[350px] h-[250px] flex flex-col justify-between dark:bg-[rgba(0,0,0,0.05)] outline outline-1 rounded-md'>
            <div className='w-[350px] h-[150px] bg-black dark:bg-white'></div>
            <div className='mx-2 my-2 flex flex-row justify-between font-semibold'>
            <div>02/03/2024</div>
            <div>04:40</div>
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

export default Records;