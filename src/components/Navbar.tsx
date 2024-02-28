import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link'
import UserLinks from './UserLinks';

const Navbar = () => {
  return (
    <div className='px-4 pt-4 pb-1'>
        <div className='flex flex-row justify-between bg-[#F8EEEE] rounded-[15px] h-[70px]'>
            <div className='flex flex-row gap-10 items-center pl-10 text-lg'>
                <div>
                    <Link href={"/"}>
                        <p className='text-xl text-[#EB5454]'>book<b>dev</b></p>
                    </Link>
                </div>
                <div className='flex flex-row gap-2 w-[400px]'>
                    <Link href={"/catalog"}>
                        <div className='flex basis-1/4 bg-[#F6BABA] cursor-pointer rounded-full justify-center hover:bg-[#F9A6A6] ease-in-out duration-500'>
                            <p className=' px-6 py-2 font-medium'>Catalog</p>
                        </div>
                    </Link>
                    <Link href={"/catalog/used"}>
                        <div className='flex basis-1/4 bg-[#F6BABA] cursor-pointer rounded-full justify-center hover:bg-[#F9A6A6] ease-in-out duration-500'>
                            <p className=' px-8 py-2 font-medium'>Used</p>
                        </div>
                    </Link>
                    <div className='flex basis-1/4 bg-[#F6BABA] cursor-pointer rounded-full justify-center hover:bg-[#F9A6A6] ease-in-out duration-500'>
                        <p className=' px-8 py-2 font-medium'>Gifts</p>
                    </div>
                    <div className='flex basis-1/4 bg-[#F6BABA] cursor-pointer rounded-full justify-center hover:bg-[#F9A6A6] ease-in-out duration-500'>
                        <p className=' px-8 py-2 font-medium'>Sell</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-14 items-center pr-10'>
                <div className='flex flex-row gap-10 items-center font-medium'>
                    <p>Blog</p>
                    <p>Events</p>
                    <p>Stores</p>
                </div>
                <div className='flex flex-row gap-3 items-center font-medium'>
                    <UserLinks/>
                    <Link href={"/cart"}>
                        <div className='rounded-full bg-[#F6BABA] hover:bg-[#F9A6A6] ease-in-out duration-500'>
                            <AiOutlineShopping className='p-2 text-[50px]'/>
                        </div>
                    </Link>
                    <div className='rounded-full bg-black'>
                        <IoSearchOutline className='p-2 text-[50px] text-[#F6BABA]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar