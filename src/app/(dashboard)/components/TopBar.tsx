"use client"
import React from 'react';
import { ModeToggle } from '@/components/toggle-button';
import { Avatar } from '@/components/ui/avatar';

const TopBar = () => {
  return (
    <div className='drop-shadow-md'>
      <div className="flex flex-row items-center ml-16 mr-8 my-6 justify-between">
      <div className="font-bold text-xl">
        onemed
      </div>
      <div className='flex flex-row items-center gap-5'>
          <ModeToggle />
          <div className='shadow-md rounded-full'>
              <Avatar/>
          </div>

      </div>
    </div>
      <hr className='mt-2'/>
    </div>
  )
}

export default TopBar;
