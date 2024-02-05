import React from 'react';
import book1984 from "./images/1984.png"
import richDadpoorDad from "./images/richdadpoordad.jpg";
import flowers from "./images/flowersForAlgernon.jpg";

const PicksOfTheMonth = () => {
  return (
    <div className='h-fit pb-28 bg-[#F8EEEE] rounded-[15px] px-10 pt-4'>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-2 pt-5  text-xl'>
                <p className='font-medium'>Picks Of The Month</p>

                <p className='text-4xl pt-10'>Choose our top 3 books voted by our book club members <br/>and combined with our most sold books</p>
            </div>
            <div className='flex flex-row gap-16 justify-center items-center pt-24'>
                <div className='z-1 basis-1/3 h-2/3 border-2 border-black rounded-lg hover:bg-[#F7C5C5] ease-in-out duration-500'>
                    <div className='flex justify-center pt-6'>
                        <img src={book1984.src} className='z-0 h-[700px] w-[450px] hover:scale-105 rounded-xl ease-in-out duration-500 hover:rotate-3'/>
                    </div>
                    <div className='pt-8'>
                        <div className='pb-8 border-t-2 border-black pt-4 flex flex-col gap-5'>
                            <div className='px-4 flex justify-between'>
                                <p className='text-4xl'>1984</p>
                                <p className='text-4xl'>George Orwell</p>
                            </div>
                            <div className='px-4 flex justify-between'>
                                <p className='text-2xl'>1158 bought this month</p>
                                <p className='text-2xl'>53 critic reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-1 basis-1/3 h-2/3 border-2 border-black rounded-lg hover:bg-[#A6B5F9] ease-in-out duration-500'>
                    <div className='flex justify-center pt-6'>
                        <img src={richDadpoorDad.src} className='z-0 h-[700px] w-[450px] hover:scale-105 rounded-xl ease-in-out duration-500 hover:-rotate-3'/>
                    </div>
                    <div className='pt-8'>
                        <div className='pb-8 border-t-2 border-black pt-4 flex flex-col gap-5'>
                            <div className='px-4 flex justify-between'>
                                <p className='text-3xl'>Rich Dad Poor Dad</p>
                                <p className='text-3xl'>Robert Kiyosaki</p>
                            </div>
                            <div className='px-4 flex justify-between'>
                                <p className='text-2xl'>🔥200 bought this week🔥</p>
                                <p className='text-2xl'>102 critic reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-1 basis-1/3 h-2/3 border-2 border-black rounded-lg hover:bg-[#9BBA98] ease-in-out duration-500'>
                    <div className='flex justify-center pt-6'>
                        <img src={flowers.src} className='z-0 h-[700px] w-[450px] hover:scale-105 rounded-xl ease-in-out duration-500 hover:rotate-3'/>
                    </div>
                    <div className='pt-8'>
                        <div className='pb-8 border-t-2 border-black pt-4 flex flex-col gap-5'>
                            <div className='px-4 flex justify-between'>
                                <p className='text-3xl'>Flowers for Algernon</p>
                                <p className='text-3xl'>Daniel Keyes</p>
                            </div>
                            <div className='px-4 flex justify-between'>
                                <p className='text-2xl'>104 orders booked from today</p>
                                <p className='text-2xl'>102 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default PicksOfTheMonth