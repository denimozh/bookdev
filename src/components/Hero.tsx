import React from 'react'
import { BsBook } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='h-[96vh] bg-[#F7C5C5] rounded-[15px] flex flex-col '>
        <div className='pt-32 pl-10 pr-12'>
            <div className='flex flex-row justify-between pb-4'>
                <p className='text-9xl'>PORTLAND'S</p>
                <div>
                    <p className='text-3xl text-right font-medium'>Shop new, used and hard to find <br/>books online or in-store</p>
                </div>
            </div>
            <div className='flex flex-row gap-16'>
                <div>
                    <p className='text-[130px] decoration-[10px] pb-2.5'>LEGENDARY</p>
                    <div className='h-2.5 bg-black rounded-md'></div>
                </div>
                <p className='text-[132px]'>INDEPENDENT</p>
            </div>
            <div className='flex flex-row justify-between pb-8 relative'>
                <div>
                    <p className='text-3xl text-left font-medium absolute bottom-5 left-0'>We love everything about books <br/> and our customers</p>
                </div>
                <div>
                    <p className='text-9xl pb-5 flex flex-row gap-5'>B<span><BsBook/></span>KSTORE</p>
                    <div className='h-2.5 bg-black rounded-md'></div>
                </div>
            </div>
        </div>
        <div className='flex justify-center pt-24'>
            <div className='flex w-5/12 bg-white rounded-full h-20 items-center'>
                <div className='w-full h-16 pl-5 flex flex-row justify-between items-center'>
                    <input placeholder="Search" className='outline-none'/>
                    <div className=''>
                        <div className='z-1 bg-black h-20 w-20 rounded-full flex items-center justify-center'>
                            <FaArrowRightLong className='text-[30px] text-[#F7C5C5]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero