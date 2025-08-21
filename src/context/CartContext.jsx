import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add product to cart with duplicate check
    const addToCart = (product) => {
        const exists = cart.some(item => item.id === product.id);
        if (exists) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'This product is already in your cart!',
                confirmButtonColor: '#3085d6'
            });
        } else {
            setCart(prev => [...prev, product]);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'Product has been added to your cart.',
                confirmButtonColor: '#3085d6'
            });
        }
    };

    // Remove product from cart
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    // Show all products in cart
    const showCart = () => {
        if (cart.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Cart is empty',
                text: 'You have no products in your cart yet.',
            });
        } else {
            const html = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
            Swal.fire({
                title: 'Your Cart',
                html: html,
                showCloseButton: true,
                confirmButtonText: 'Close',
            });
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, showCart }}>
            {children}
        </CartContext.Provider>
    );
};
