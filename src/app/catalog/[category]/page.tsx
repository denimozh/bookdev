import React from 'react'
import Marquee from 'react-fast-marquee'
import detective1 from "./img/detective1.jpg";
import detective2 from "./img/detective2.jpg";
import detective3 from "./img/detective3.jpg";
import Link from 'next/link';

const page = async () => {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/catalog",{
        cache:"no-store"
    })

    if(!res.ok){
        throw new Error("Failed!");
    }

    return res.json()
}
  return (
    <div>
      <div className='h-[120vh] px-4 flex flex-col gap-4 pb-4 pt-4'>
        <Marquee className='h-[15%] bg-white rounded-[25px] flex items-center pt-1'>
          <p className='text-9xl pb-4 pl-4'>Detective Books-</p>
          <p className='text-9xl pb-4 pl-4'>Detective Books-</p>
          <p className='text-9xl pb-4 pl-4'>Detective Books-</p>
          <p className='text-9xl pb-4 pl-4'>Detective Books-</p>
        </Marquee>
        <div className='h-[90%] bg-[#FDF2F2] rounded-[25px] px-6 py-2'>
          <div className='h-[100%] flex flex-row justify-between gap-5 py-4'>
            <Link href={"/product/1"} className='relative h-full basis-1/3 bg-red-200 rounded-[20px] cursor-pointer hover:cursor-none hover:bg-[#C5D0FF] ease-in-out duration-500'>
              <div className='group flex justify-center items-center h-full'>
                <img src={detective1.src} className='h-full rounded-[20px] p-5 group-hover:scale-90 ease-in-out duration-500'/>
                <div className="opacity-0 hover:opacity-100 ease-in duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-black font-semibold px-20 ">
                  <p className='bg-white p-6 rounded-full text-center leading-normal shadow-2xl'>View Book</p>
                </div>
              </div>
            </Link>
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
    </div>
  )
}

export default page