"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import aboutUsBook from "./images/aboutUsBook.jpg";
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='h-[96vh] bg-[#F8EEEE] rounded-[15px] px-10 pt-4'>
      <div className='flex flex-row gap-2 pt-5 items-center text-xl'>
        <p className='font-medium'>About Us</p>
        <FaArrowRightLong className='text-2xl'/>
      </div>
      <div className='flex flex-row gap-16 h-full items-center'>
        <div className='flex flex-col basis-2/5 items-center gap-16 pb-44'>
          <p className='text-8xl'>SELL BOOKS SINCE 1971</p>
          <p className='text-2xl'>Powell's Books is an independent bookseller serving Portland, Oregon, since 1971. 
                                  Through bookdev.com and our expansive online community, we also reach readers around the world, people 
                                  who are as excited about book as we are
          </p>
        </div>
        <div className='basis-3/5 justify-center pl-10'>
          <img src={aboutUsBook.src} alt="" className='rounded-[15px]'/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs