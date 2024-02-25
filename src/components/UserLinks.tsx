"use client"

import Link from 'next/link'
import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { FaNewspaper } from "react-icons/fa";
import { signOut, useSession } from 'next-auth/react';

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
        {status === "authenticated" ? (
            <div>
                <Link href={"/orders"}>
                    <div className='rounded-full bg-[#F6BABA] hover:bg-[#F9A6A6] ease-in-out duration-500'>
                        <FaNewspaper className='p-3 text-[50px]'/>
                    </div>
                </Link>
                <span className='ml-4 cursor-pointer' onClick={()=>signOut()}>Logout</span>
            </div> ) : (
            <Link href={"/login"}>
                <div className='rounded-full bg-[#F6BABA] hover:bg-[#F9A6A6] ease-in-out duration-500'>
                    <FaRegUser className='p-3 text-[50px]'/>
                </div>
            </Link>
        )}
    </div>
  )
}

export default UserLinks