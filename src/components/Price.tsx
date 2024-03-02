'use client';

import React, { useEffect } from 'react';
import { FaHeadphones } from 'react-icons/fa6';
import { MdMenuBook, MdOutlineBookOnline } from 'react-icons/md';
import { useState } from 'react';
import { ProductType } from '@/types/types';
import { useCartStore } from '@/utils/store';
import { toast } from 'react-toastify';

const Price = ({ product }: { product: ProductType }) => {
    const [total, setTotal] = useState(product.price);
    const [option, setOption] = useState('Hardcover');

    const { addToCart } = useCartStore();

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    const handleCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            img: product.img,
            price: total,
            optionTitle: option,
        });
        toast.success('Product added to cart');
    };
    return (
        <div>
            <div className="flex flex-col justify-between bg-white h-[100%] gap-2 rounded-[20px] pt-4 pl-4">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-3 text-gray-500">
                        <p className="capitalize">{product.catSlug}</p>
                        <p className="">-</p>
                        <p className="">{product.publisher}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-4">
                        <p className="text-5xl font-semibold pl-1">
                            {product.title}
                        </p>
                        <p className="font-semibold pl-2">
                            By Arthur Conan Doyle
                        </p>
                        <div className="flex flex-row w-[80%]">
                            <div className="flex flex-row gap-5 pt-12 w-full">
                                <button
                                    onMouseDown={() => setOption('Hardcover')}
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
                                    onMouseDown={() => setOption('eBook')}
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
                                    onMouseDown={() => setOption('AudioBook')}
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
                            ;
                        </div>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-4 gap-4 pt-5 pl-4 pb-5">
                        <div className="flex flex-row text-gray-500">
                            Publisher
                        </div>
                        <div className="flex flex-row font-semibold">
                            {product.publisher}
                        </div>
                        <div className="flex flex-row text-gray-500">
                            Print Length
                        </div>
                        <div className="flex flex-row font-semibold">
                            {product.printLength}
                        </div>
                        <div className="flex flex-row text-gray-500">
                            Publication Date
                        </div>
                        <div className="flex flex-row font-semibold">
                            {product.date}
                        </div>
                        <div className="flex flex-row text-gray-500">
                            Dimensions
                        </div>
                        <div className="flex flex-row font-semibold">
                            {product.dimensions}
                        </div>
                        <div className="flex flex-row text-gray-500">
                            Language
                        </div>
                        <div className="flex flex-row font-semibold">
                            {product.language}
                        </div>
                        <div className="flex flex-row text-gray-500">Age</div>
                        <div className="flex flex-row font-semibold">
                            {product.age}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row h-[23%] gap-1 pt-1">
                <button
                    onClick={() => handleCart()}
                    className="flex basis-2/3 bg-red-200 rounded-[20px] cursor-pointer justify-center items-center hover:bg-red-300 active:bg-red-400 ease-in-out duration-500"
                >
                    <p className="text-4xl font-medium">Add To Cart</p>
                </button>
                <div className="flex basis-1/3 bg-orange-200 rounded-[20px] cursor-pointer justify-center items-center">
                    <p className="text-4xl font-medium">WishList</p>
                </div>
            </div>
        </div>
    );
};

export default Price;
