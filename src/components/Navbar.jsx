import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { CartContext } from '../context/CartContext';

const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact' },
];

const Navitems = ({ toggleMenu }) => (
    <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
        {navItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
                <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary"}
                >
                    {item.label}
                </NavLink>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart, showCart } = useContext(CartContext);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
                <Link to='/' className='font-bold'>Ammar</Link>

                <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer hover:text-primary'>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className='hidden md:flex'>
                    <Navitems />
                </div>

                <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <Navitems toggleMenu={toggleMenu} />
                </div>

                <div className='hidden md:block relative cursor-pointer' onClick={showCart}>
                    <FaBagShopping className='text-xl' />
                    <sup className='absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
                        {cart.length}
                    </sup>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;
