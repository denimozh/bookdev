import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import styles from './style.module.css';
import giftbook from './img/giftbook.webp';
import Link from 'next/link';
import { CatalogType } from '@/types/types';
import Marquee from 'react-fast-marquee';

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/catalog', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed!');
    }

    return res.json();
};

const CatalogPage = async () => {
    const catalog: CatalogType = await getData();
    return (
        <div className="h-[130vh] px-4">
            <div className="flex flex-row h-[55%] gap-1">
                <div className="w-[55%] bg-catalogBooks bg-auto rounded-[15px] bg-blend-soft-light bg-stone-700">
                    <div className="flex flex-col px-8 justify-between h-[100%] pb-10">
                        <div className="flex flex-row justify-between items-center ">
                            <div className="text-white pt-6 ">
                                <p className="text-6xl">New Arrivals</p>
                            </div>
                            <div className="pt-2">
                                <div className="z-1 cursor-pointer bg-black h-16 w-16 rounded-full flex items-center justify-center hover:scale-105 ease-in-out duration-500">
                                    <FaArrowRightLong className="text-[35px] text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white">
                            <p className="text-8xl">+128</p>
                            <div className="flex flex-col pt-3 gap-1">
                                <div className="flex flex-row gap-3">
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Fairy Tale by Stephen King
                                    </p>
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Overkill by Sandra Brown
                                    </p>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Crying in H Mart by Michael Zauner
                                    </p>
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Ugly Love by Colleen Hoover
                                    </p>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Babel by R.F Kaung
                                    </p>
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Verify by Collen Hoover
                                    </p>
                                    <p className="font-medium bg-white p-4 text-black rounded-full">
                                        Overkill by Sandra Brown
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    href={'/catalog/bestsellers'}
                    className="w-[45%] bg-white rounded-[15px] group cursor-pointer hover:bg-[#d8dbf8] ease-in-out duration-500"
                >
                    <div className="flex flex-col px-8 h-[55%] gap-1">
                        <div className="flex flex-row items-center justify-between ">
                            <div className="text-black pt-6">
                                <p className="text-6xl">Best Sellers</p>
                            </div>
                            <div className="pt-2">
                                <div className="z-1 bg-black cursor-pointer h-16 w-16 rounded-full flex items-center justify-center group-hover:scale-110 ease-in-out duration-500">
                                    <FaArrowRightLong className="text-[35px] text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <div className="relative flex justify-center items-center align-center h-[400px] w-[500px] pt-32">
                                <div className={styles.blob}></div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="h-[65%] pt-1 grid grid-cols-[1fr_repeat(3,2fr)] grid-rows-[repeat(2,1fr)] gap-x-1 gap-y-1">
                <div className="cursor-default bg-[#FFE9D3] row-span-2 rounded-[25px] ">
                    <div className="flex flex-col ">
                        <div className="w-[200px] -rotate-90">
                            <p className="text-8xl font-medium translate-y-4 -translate-x-[18rem] text-right">
                                All Genres
                            </p>
                        </div>
                    </div>
                </div>
                {catalog.map(category => (
                    <Link
                        href={`/catalog/${category.slug}`}
                        key={category.id}
                        className={`group cursor-pointer ${category.color} ${category.hoverColor} rounded-[25px] ease-in-out duration-500`}
                    >
                        <div className="">
                            <div className="flex flex-row justify-between px-6">
                                <div className="pt-6 ">
                                    <p className="text-4xl font-medium">
                                        {category.title}
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <div className="z-1 bg-black cursor-pointer h-16 w-16 rounded-full flex items-center justify-center group-hover:scale-105 ease-in-out duration-500">
                                        <FaArrowRightLong className="text-[35px] text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="h-[55%] px-1 pt-1 pb-4">
                <div className="flex flex-row gap-1 h-[100%]">
                    <Link
                        href={'/catalog/usedbooks'}
                        className="group cursor-pointer hover:bg-[#FB8484] flex flex-col basis-[43%] bg-[#F9A6A6] rounded-[25px] ease-in-out duration-500 h-[100%] px-6"
                    >
                        <div className="flex flex-row justify-between">
                            <div className="pt-6">
                                <p className="text-6xl font-medium">
                                    Used Books
                                </p>
                            </div>
                            <div className="pt-4">
                                <div className="z-1 bg-black cursor-pointer h-16 w-16 rounded-full flex items-center justify-center group-hover:scale-110 ease-in-out duration-500">
                                    <FaArrowRightLong className="text-[35px] text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <div className="relative flex justify-center items-center align-center h-[400px] w-[500px] pt-5">
                                <div className={styles.blob1}></div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={'/catalog/gift'}
                        className="group relative cursor-pointer basis-[57%] bg-white hover:bg-[#F8F4D8] rounded-[25px] h-[100%] ease-in-out duration-500 flex flex-col justify-between gap-20"
                    >
                        <div className="flex flex-row justify-between px-6">
                            <div className="pt-6 ">
                                <p className="text-6xl font-medium">
                                    Gift Edition
                                </p>
                            </div>
                            <div className="pt-5">
                                <div className="z-1 bg-black cursor-pointer h-16 w-16 rounded-full flex items-center justify-center group-hover:scale-105 ease-in-out duration-500">
                                    <FaArrowRightLong className="text-[35px] text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="px-6">
                            <img
                                src={giftbook.src}
                                className="w-[60%] h-[60%] rounded-[25px] group-hover:scale-95 ease-in-out duration-500"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bg-white">
                <Marquee autoFill={true} speed={85}>
                    <div className="px-4">
                        <p className="text-6xl text-black overflow-hidden py-10">
                            Summer Sale -20%
                        </p>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default CatalogPage;
