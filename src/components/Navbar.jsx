import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

// array of objects
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact' },
]

const Navitems = ({ toggleMenu }) => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8 '>
            {
                navItems.map((item, index) => (
                    <li key={index} onClick={toggleMenu}>

                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-bold"
                                    : "hover:text-primary"
                            }
                        >{item.label}</NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScorolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }

    // when scroll , apply bg color to navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScorolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}>
            <nav className=' max-w-screen-2xl container mx-auto flex justify-between  items-center py-6 px-4' >
                {/* logo */}
                <Link to='/' className='font-bold'>Logo</Link>


                {/* hamburger menu for mobile */}

                <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer hover:text-primary'>
                    {
                        isMenuOpen ? null : <FaBars />
                    }
                </div>

                {/* desktops menu items */}
                <div className='hidden md:flex '>
                    <Navitems></Navitems>
                </div>

                {/* mobile menu items */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? '-translate-x-0' : 'translate-x-full'} md:hidden`} >
                    <div className=' absolute top-4 right-5 text-xl cursor-pointer' onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                    <Navitems toggleMenu={toggleMenu}></Navitems>
                </div>

                {/* cart icon */}
                <div className=' hidden md:block cursor-pointer relative '><FaBagShopping className='text-xl' />
                    <sup className=' absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>0</sup>
                </div>
            </nav>
        </header>
    )
}

export default Navbar