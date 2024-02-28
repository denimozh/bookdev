import React from 'react';
import { ProductType } from '@/types/types';

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products",{
        cache:"no-store"
    })

    if(!res.ok){
        throw new Error("Failed!");
    }

    return res.json()
  }

const PicksOfTheMonth = async () => {
  
  const featuredProducts:ProductType[] = await getData()
  return (
    <div className='h-fit pb-28 bg-[#F8EEEE] rounded-[15px] px-10 pt-4'>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-2 pt-5  text-xl'>
                <p className='font-medium'>Picks Of The Month</p>

                <p className='text-4xl pt-10'>Choose our top 3 books voted by our book club members <br/>and combined with our most sold books</p>
            </div>
            <div className='flex flex-row gap-16 justify-center items-center pt-24'>
                {featuredProducts.map((item:any) =>
                    <div key={item.id} className={`z-1 basis-1/3 h-2/3 border-2 border-black rounded-lg ${item.hoverColor} ease-in-out duration-500`}>
                        <div className='flex justify-center pt-6'>
                            <img src={item.img} className='z-0 h-[700px] w-[450px] hover:scale-105 rounded-xl ease-in-out duration-500 hover:rotate-3'/>
                        </div>
                        <div className='pt-8'>
                            <div className='pb-8 border-t-2 border-black pt-4 flex flex-col gap-5'>
                                <div className='px-4 flex justify-between'>
                                    <p className='text-4xl'>{item.title}</p>
                                    
                                </div>
                                <div className='px-4 flex justify-between'>
                                    <p className='text-2xl'>{item.age} bought today</p>
                                    <p className='text-2xl'>{item.printLength} critic reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
         </div>
    </div>
  )
}

export default PicksOfTheMonth