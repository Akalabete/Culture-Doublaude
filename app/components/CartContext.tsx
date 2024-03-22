'use client'

import React from 'react'
import { createContext, useContext, useState, ReactNode } from "react";
import Cart from "./Cart";

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    incrementQuantity: (productId: number) => void;
    decrementQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: React.ReactNode;
}
export const CartProvider: React.FunctionComponent<CartProviderProps> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);
    const addToCart = (product: Product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if(existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity+=1;
            setCart(updatedCart);
        } else {
            setCart([...cart, {...product, quantity: 1}]);
        }
    }
    const removeFromCart = (productId: number) => {
        const updatedCart = cart.filter((item) => item.id !== productId.toString());
        setCart(updatedCart);
    }
    const incrementQuantity = (productId: number) => {
        const updatedCart = cart.map((item) => 
            item.id === productId.toString() ? { ...item, quantity: item.quantity + 1 } : item
        )
        setCart(updatedCart);
    }
    const decrementQuantity = (productId: number) => {
        let updatedCart = cart.map((item) =>
          item.id === productId.toString() ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
        )
      
        const product = updatedCart.find((item: Product) => item.id === productId.toString());
        if (product && product.quantity === 0) {
          updatedCart = updatedCart.filter((item) => item.id !== productId.toString());
        }
      
        setCart(updatedCart);
      }
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () : CartContextType => {
    const context = useContext(CartContext);
    if(context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}