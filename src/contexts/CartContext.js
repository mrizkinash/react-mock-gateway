import { createContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'Valentinus';
export const INCREASE_ITEM = '+';
export const DECREASE_ITEM = '-';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const cartCache = localStorage.getItem(STORAGE_KEY);

        if (cartCache) {
            return JSON.parse(cartCache);
        }

        return [];
    });

    const cartQuantity = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);
    const cartTotalPrice =  cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    function addItemToCart(item) {
        const itemIsInCart = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        const newCart = cartItems.slice();

        if (itemIsInCart < 0) {
            newCart.push(item);
        } else {
            newCart[itemIsInCart].quantity += item.quantity;
        }

        setCartItems(newCart);
    }

    function changeCartItemQuantity(cartItemId, action){
        const itemIsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);
        const newCart = cartItems.slice();

        if (itemIsInCart >= 0) {
            if (action === INCREASE_ITEM) {
                newCart[itemIsInCart].quantity += 1;
            } else if (action === DECREASE_ITEM) {
                newCart[itemIsInCart].quantity -= 1;
            }
        }

        setCartItems(newCart);
    }

    function removeCartItem(cartItemId) {
        const itemIsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);
        const newCart = cartItems.slice();

        if (itemIsInCart >= 0) {
            newCart.splice(itemIsInCart, 1);
        }

        setCartItems(newCart);
    }

    function clearCart() {
        setCartItems([]);
    }

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                cartQuantity,
                cartTotalPrice,
                changeCartItemQuantity,
                removeCartItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}