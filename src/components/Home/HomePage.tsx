"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
// import image from "@/media/bg-top.jpg"
import Cards from './Cards'
import { cards_data } from '../data/data'
import Testimonials from './Testimonials'

export default function HomePage() {
  return(
    <section className="h-screen">
      <div className="flex flex-col w-full">
        <div className="w-5/12 flex flex-col justify-center items-start mx-auto mt-[150px]">
          <span className="text-4xl font-bold">Welcome, to <span className='text-[--color-purple-dark] dark:text-[--color-purple-light]'>OneMed</span></span>
          <span className='mt-2 text-xl opacity-70 font-semibold'>
            A platform for providing
            <span className='text-[--color-purple-dark] dark:text-[--color-purple-light]'>
              <TypeAnimation 
                sequence={[
                  " Personalized Storage", 1000,
                  " Easy Acess", 1000,
                ]}
                repeat={Infinity}
                />
            </span>
          </span>
        </div>
        <div>
          <Image 
            className='hidden absolute opacity-60 lg:block z-[-1] top-0 w-screen h-[60%] rounded-b-lg'
            src="/static/bg-top.jpg" 
            alt="My Image"
            width={500}
            height={500}
            />
        </div>
      </div>
      <div className='flex gap-10 justify-center mt-10'>
        {
          cards_data.map((card_data, index) => (
            <Cards key={index} image={card_data.image} title={card_data.title} description={card_data.description}/>
          ))
        }
      </div>

      <Testimonials />
    </section>
  )
}