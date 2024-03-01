/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { ActionTypes, CartType } from '@/types/types';

const INITIAL_STATE = { products: [], totalItems: 0, totalPrice: 0 };

export const useCartStore = create<CartType & ActionTypes>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart(item) {
        set((state) => ({
            products: [...state.products],
            totalItems: state.totalItems,
            totalPrice: state.totalPrice + item.price,
        }));
    },
    removeFromCart(item) {
        set((state)=>({
            products:state.products.filter((product)=>product.id !== item.id),
            totalItems:state.totalItems,
            totalPrice:state.totalPrice-item.price,
        }))
    },
}));
