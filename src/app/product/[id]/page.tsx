import React from 'react'
import Marquee from 'react-fast-marquee'
import { IoStarSharp } from "react-icons/io5";

const page = () => {
  return (
    <div className='px-4'>
        <div className='flex flex-row'>
            <div className='flex basis-1/3 bg-white rounded-[20px]'>

            </div>
            <div className='flex basis-2/3 bg-white rounded-[20px]'>
                <div className='flex justify-between'>
                    Detective
                    <div className='flex flex-row'>
                        
                    </div>
                </div>
            </div>
        </div>
        <Marquee>

        </Marquee>
        <div className='flex flex-col bg-white rounded-[20px]'>
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
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default page