import React from 'react'
import { Slider } from '@/components';
import { IoStarSharp } from "react-icons/io5";

const page = () => {
  return (
    <div className='px-4 h-[200vh] flex flex-col gap-1'>
        <div className='flex flex-row h-[35%] gap-1'>
            <div className='flex basis-1/3 bg-white rounded-[20px]'>

            </div>
            <div className='flex flex-col basis-2/3 gap-1'>
                <div className='flex justify-between bg-white h-[85%]  rounded-[20px]'>
                    Detective
                    <div className='flex flex-row'>
                        
                    </div>
                </div>
                <div className='flex flex-row h-[15%] gap-1'>
                    <div className='basis-2/3 bg-red-200 rounded-[20px] cursor-pointer'>
                            <p className='text-4xl font-medium text-center pt-5'>Add To Cart</p>
                    </div>
                    <div className='basis-1/3 bg-orange-200 rounded-[20px] cursor-pointer'>
                        <p className='text-4xl font-medium text-center pt-5'>WishList</p>
                    </div>
                </div>
            </div>
        </div>
        <Slider/>
        <div className='flex flex-col bg-white rounded-[20px] h-[30%]'>
            <div className='flex flex-row justify-between'>
                <div>
                    <p>Description</p>
                </div>
                <div className='flex flex-row gap-5'>
                    <p>Nominated Books</p>
                    <p>Bestsellers</p>
                    <p>Masters of Genre</p>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        <div className='h-[40%] bg-black rounded-[20px] flex flex-row gap-1 pb-4'>
            <div className='basis-1/3 h-full bg-red-200 rounded-[20px]'>

            </div>
            <div className='basis-2/3 h-full bg-white rounded-[20px]'>

            </div>
        </div>
    </div>
  )
}

export default page