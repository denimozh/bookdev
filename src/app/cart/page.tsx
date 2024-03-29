'use client';

import React, { useEffect } from 'react';
import testimg from './img/p1.png';
import { useCartStore } from '@/utils/store';
import { Footer } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
    const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
    const {data:session} = useSession()
    const router = useRouter()

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    const handleCheckout = async () => {
        if(!session){
            router.push("/");
        } else {
            try {
                const res = await fetch("http://localhost:3000/api/orders", {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        price:totalPrice,
                        products,
                        status:"Not paid",
                        userEmail:session.user.email,

                    })
                });
                const data = await res.json()
                router.push(`/pay/${data.id}`)
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            <div className="h-[100vh] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row px-4 gap-2">
                {/* PRODUCTS CONTAINER */}
                <div className="bg-red-100 rounded-[20px] overflow-none  p-4 flex flex-col justify-center overscroll-none xl:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
                    {products.map(item => (
                        <div
                            className="flex items-center justify-between mb-4"
                            key={item.id}
                        >
                            <img
                                src={item.img}
                                className="w[150px] h-[150px] rounded-lg"
                            />
                            <div className="">
                                <h1 className="uppercase text-xl font-bold">
                                    {item.title}
                                </h1>
                                <span>{item.optionTitle}</span>
                            </div>
                            <h2 className="font-bold">${item.price}</h2>
                            <span
                                className="cursor-pointer"
                                onClick={() => removeFromCart(item)}
                            >
                                X
                            </span>
                        </div>
                    ))}
                </div>
                {/* PAYMENT CONTAINER */}
                <div className="h-1/2 p-4 rounded-[20px] bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
                    <div className="flex justify-between">
                        <span className="">Subtotal ({totalItems} items)</span>
                        <span className="">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Service Cost</span>
                        <span className="">$0.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="">Delivery Cost</span>
                        <span className="text-green-500">FREE!</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <span className="">TOTAL(INCL. VAT)</span>
                        <span className="font-bold">${totalPrice}</span>
                    </div>
                    <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end" onClick={handleCheckout}>
                        CHECKOUT
                    </button>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default page;
