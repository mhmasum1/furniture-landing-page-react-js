import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";

// array of objects
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About us' },
    { path: '/contact', label: 'Contact' },
]

const Navitems = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8 '>
            {
                navItems.map((item, index) => (
                    <li key={index}>

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
    return (
        <header>
            <nav className=' max-w-screen-2xl container mx-auto flex justify-between  items-center py-6 px-4' >
                {/* logo */}
                <Link to='/' className='font-bold'>Logo</Link>

                {/* desktops menu items */}
                <div className='hidden md:flex '>
                    <Navitems></Navitems>
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