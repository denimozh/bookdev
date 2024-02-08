import React from 'react'
import Marquee from 'react-fast-marquee'
import detective1 from "./img/detective1.jpg";
import detective2 from "./img/detective2.jpg";
import detective3 from "./img/detective3.jpg";

const page = () => {
  return (
    <div className='h-[100vh] px-4 flex flex-col gap-1 pb-4'>
      <Marquee className='h-[15%] bg-white rounded-[25px] flex items-center pt-1'>
        <p className='text-7xl pb-4 pl-4'>Detective Books-</p>
        <p className='text-7xl pb-4 pl-4'>Detective Books-</p>
        <p className='text-7xl pb-4 pl-4'>Detective Books-</p>
        <p className='text-7xl pb-4 pl-4'>Detective Books-</p>
      </Marquee>
      <div className='h-[90%] bg-[#FDF2F2] rounded-[25px] px-6'>
        <div className='h-[100%] flex flex-row justify-between gap-5 py-4'>
          <div className='h-full basis-1/3 bg-red-200 rounded-[20px] cursor-pointer hover:bg-[#C5D0FF] ease-in-out duration-500'>
            <div className='group flex justify-center items-center h-full'>
              <img src={detective1.src} className='h-full rounded-[20px] p-5 group-hover:scale-90 ease-in-out duration-500'/>
            </div>
          </div>
          <div className='h-full basis-1/3 bg-red-200 rounded-[20px] cursor-pointer hover:bg-[#C5D0FF] ease-in-out duration-500'>
            <div className='group flex justify-center items-center h-full'>
              <img src={detective2.src} className='h-full rounded-[20px] p-5 group-hover:scale-90 ease-in-out duration-500'/>
            </div>
          </div>
          <div className='h-full basis-1/3 bg-red-200 rounded-[20px] cursor-pointer hover:bg-[#C5D0FF] ease-in-out duration-500'>
            <div className='group flex justify-center items-center h-full'>
              <img src={detective3.src} className='h-full rounded-[20px] p-5 group-hover:scale-90 ease-in-out duration-500'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page