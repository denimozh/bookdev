'use client';

import { OrderType } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { MdOutlineModeEdit } from 'react-icons/md';
import React from 'react';
import { toast } from 'react-toastify';

const page = () => {
    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === 'unauthenticated') {
        router.push('/');
    }

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({ id, status }: { id: string; status: string }) => {
            return await fetch(`http://localhost:3000/api/orders/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(status),
            });
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
        },
    });

    const { isLoading, data } = useQuery({
        queryKey: ['orders'],
        queryFn: async () =>
            await fetch('http://localhost:3000/api/orders').then(
                async res => await res.json(),
            ),
    });

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        const status = input.value;

        mutation.mutate({ id, status });
        toast.success('The order status has been changed!');
    };

    if (isLoading || status === 'loading') return 'Loading...';
    return (
        <div className="px-4 ">
            <div className="p-4 px-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-red-100 rounded-[20px]">
                <div className="bg-red-300 p-4 rounded-[20px]">
                    <table className="w-full border-separate border-spacing-3 bg-red-400 p-6 rounded-xl shadow-2xl">
                        <thead>
                            <tr className="text-left text-white">
                                <th className="hidden md:block text-white">
                                    Order ID
                                </th>
                                <th className="text-white">Date</th>
                                <th>Price</th>
                                <th className="hidden md:block">Products</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {data.map((item: OrderType) => (
                                <tr
                                    className="text-sm md:text-base bg-red-200 "
                                    key={item.id}
                                >
                                    <td className="hidden md:block py-6 px-1 font-bold">
                                        {item.id}
                                    </td>
                                    <td className="py-6 px-1 rounded-xl">
                                        {item.createdAt.toString().slice(0, 10)}
                                    </td>
                                    <td className="py-6 px-1 rounded-xl">
                                        {item.price}
                                    </td>
                                    <td className="hidden md:block py-6 px-1 rounded-xl">
                                        {item.products[0].title}
                                    </td>
                                    {session?.user.isAdmin ? (
                                        <td>
                                            <form
                                                className="flex items-center justify-center gap-10 px-10"
                                                onSubmit={e => {
                                                    handleUpdate(e, item.id);
                                                }}
                                            >
                                                <input
                                                    placeholder={item.status}
                                                    className="p-2 ring-1 ring-red-100 rounded-md w-[75%]"
                                                />
                                                <button className="rounded-full bg-red-400 hover:bg-red-500 ease-in-out duration-500">
                                                    <MdOutlineModeEdit className="p-2 text-[50px]" />
                                                </button>
                                            </form>
                                        </td>
                                    ) : (
                                        <td className="py-6 px-1 rounded-xl">
                                            {item.status}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;
