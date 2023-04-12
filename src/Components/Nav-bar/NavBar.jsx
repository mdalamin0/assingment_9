import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import HeaderBanner from '../Header-banner/HeaderBanner';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='my-container bg-gray-200 relative'>
            <div className='relative flex items-center justify-between gap-10'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800'>Build Your Career</h1>
                <ul className='items-center hidden  lg:flex gap-10'>

                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/statistics'
                            aria-label='statistics'
                            title='statistics'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='applied job'
                            aria-label='applied job'
                            title='apply job'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                        >
                            Applied Jobs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='blog'
                            title='blog'
                            className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                        >
                            Blog
                        </NavLink>
                    </li>

                </ul>

                <button className='bg-gradient-to-r from-blue-500 z-50 to-purple-600 px-5 py-3 md:px-7 md:py-3 text-white font-semibold rounded-md '>Star Applying </button>

                {/* Mobile nav bar */}

                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1  transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (

                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>

                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2  -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600 ' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/'
                                                aria-label='Home'
                                                title='Home'
                                                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/statistics'
                                                aria-label='statistics'
                                                title='statistics'
                                                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                                            >
                                                Statistics
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/applied job'
                                                aria-label='apply job'
                                                title='apply job'
                                                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                                            >
                                                Applied Jobs
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/blog'
                                                aria-label='blog'
                                                title='blog'
                                                className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 underline transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                    </ul>


                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default NavBar;