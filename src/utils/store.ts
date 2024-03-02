/* eslint-disable prettier/prettier */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ActionTypes, CartType } from '@/types/types';

const INITIAL_STATE = { products: [], totalItems: 0, totalPrice: 0 };

export const useCartStore = create(persist<CartType & ActionTypes>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart(item) {
        const products = get().products
        const productInState = products.find(product=>product.id === item.id)
        if(productInState){
            const updatedProducts = products.map(product=> product.id === productInState.id ? {
                ...item,
                price: item.price + product.price
            } : item);
            set((state)=>({
                products:updatedProducts,
                totalItems:state.totalItems,
                totalPrice:state.totalItems + item.price,
            }))
        } else {
            set((state) => ({
                products: [...state.products, item],
                totalItems: state.totalItems,
                totalPrice: state.totalPrice + item.price,
            }));
        }
    },
    removeFromCart(item) {
        set((state)=>({
            products:state.products.filter(product=>product.id !== item.id),
            totalItems:state.totalItems,
            totalPrice:state.totalPrice-item.price,
        }))
    },
}),{name:"cart", skipHydration:true}));
