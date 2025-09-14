import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 pb-5 '>
            <div className='max-w-screen-2xl container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8'>

                {/* logo and details */}
                <div className=' md:col-span-2'>
                    <h2 className='text-2xl font-bold mb-4'><Link to="/">Ammar</Link> </h2>
                    <p className=' md:mr-12'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>

                {/* Services */}
                <div>
                    <h2 className='text-xl font-semibold mb-4 text-primary '>Services</h2>
                    <ul>
                        <li>
                            <Link to="/" className='hover:text-primary '>Email Marketing</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary '>Campaigns</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary '>Branding</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4 text-primary '>Furniture</h2>
                    <ul>
                        <li>
                            <Link to="/" className='hover:text-primary '>Beds</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary '>Chair</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary '>All</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4 text-primary '>Follow Us</h2>
                    <ul>
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center gap-2 '>
                                <FaFacebookF /><span>Facebook</span></Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center gap-2'>
                                <FaTwitter></FaTwitter><span>Twitter</span></Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center gap-2'>
                                <FaInstagram></FaInstagram><span>Instagram</span></Link>
                        </li>
                    </ul>
                </div>

            </div>
            {/* copyright */}
            <div className='mt-12 max-w-screen-2xl container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4 px-5'>
                <p> Copyright &copy; {new Date().getFullYear()} </p>
                <div className='flex items-center gap-4 '>
                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer