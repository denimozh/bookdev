import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const CatalogPage = () => {
  return (
    <div className='h-[96vh] px-4'>
        <div className='flex flex-row h-[55%] gap-1'>
            <div className="w-[55%] bg-catalogBooks bg-auto rounded-[15px] bg-blend-soft-light bg-stone-700"  >
                <div className='flex flex-col px-8 justify-between h-[100%] pb-10'>
                    <div className='flex flex-row justify-between items-center' >
                        <div className='text-white pt-6 '>
                            <p className='text-6xl'>New Arrivals</p>
                        </div>
                        <div className='pt-2'>
                            <div className='z-1 bg-black h-16 w-16 rounded-full flex items-center justify-center'>
                                <FaArrowRightLong className='text-[35px] text-white'/>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <p className='text-8xl'>+128</p>
                        <div className='flex flex-col pt-3 gap-1'>
                            <div className='flex flex-row gap-3'>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Fairy Tale by Stephen King</p>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Overkill by Sandra Brown</p>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Crying in H Mart by Michael Zauner</p>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Ugly Love by Colleen Hoover</p>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Babel by R.F Kaung</p>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Verify by Collen Hoover</p>
                                <p className='font-medium bg-white p-4 text-black rounded-full'>Overkill by Sandra Brown</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[45%] bg-white rounded-[15px]'>
                <div className='flex flex-col px-8 h-[55%] gap-1'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='text-black pt-6'>
                            <p className='text-6xl'>Best Sellers</p>
                        </div>
                        <div className='pt-2'>
                                <div className='z-1 bg-black h-16 w-16 rounded-full flex items-center justify-center'>
                                    <FaArrowRightLong className='text-[35px] text-white'/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1/5'>
                <div>
                    <p>Best Sellers</p>
                </div>
        </div>
        <div className='h-2/5'>
            <div>
                    <p>Best Sellers</p>
                </div>
        </div>
    </div>
  )
}

export default CatalogPage