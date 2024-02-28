'use client';

import React from 'react';
import { FaHeadphones } from 'react-icons/fa6';
import { MdMenuBook, MdOutlineBookOnline } from 'react-icons/md';
import { useState } from 'react';
import { ProductType } from '@/types/types';

const Price = ({ product }: { product: ProductType }) => {
    const [total, setTotal] = useState(product.price);
    return (
        <div className="flex flex-row gap-5 pt-12 w-full">
            <button
                onClick={() => setTotal(39.59)}
                className="h-[100px] group flex basis-1/3 flex-col focus:bg-red-200 hover:bg-red-100 focus:border-0 ease-in-out duration-500 border-2 border-gray-400 rounded-[20px] p-3 gap-2 "
            >
                <div className="flex flex-row gap-1 items-center">
                    <MdMenuBook />
                    <p>Hardcover</p>
                </div>
                <div>
                    <p className="text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500">
                        $39.59
                    </p>
                </div>
            </button>
            <button
                onClick={() => setTotal(32.59)}
                className="group flex basis-1/3 flex-col focus:bg-red-200 hover:bg-red-100 ease-in-out focus:border-0 duration-500 border-2 border-gray-400 rounded-[20px] p-3 gap-2"
            >
                <div className="flex flex-row gap-1 items-center">
                    <MdOutlineBookOnline />
                    <p>eBook</p>
                </div>
                <div>
                    <p className="text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500">
                        $32.59
                    </p>
                </div>
            </button>
            <button
                onClick={() => setTotal(27.59)}
                className="group flex basis-1/3 flex-col border-2 focus:bg-red-200 hover:bg-red-100 focus:border-0 ease-in-out duration-500 border-gray-400 rounded-[20px] p-3 gap-2"
            >
                <div className="flex flex-row gap-1 items-center">
                    <FaHeadphones />
                    <p>AudioBook</p>
                </div>
                <div>
                    <p className="text-2xl group-focus:text-4xl font-semibold ease-in-out duration-500">
                        $27.59
                    </p>
                </div>
            </button>
        </div>
    );
};

export default Price;
