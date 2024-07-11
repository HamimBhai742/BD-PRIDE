import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 font-roboto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex gap-3 items-center'>
                    <img className='w-14 h-14 rounded-full' src="https://cdn2.vectorstock.com/i/1000x1000/18/66/gta-logo-letter-design-vector-42541866.jpg" alt="" />
                    <h3 className='font-bold text-3xl'>BD PRIDE</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3 font-semibold">
                    <NavLink to='/'>HOME</NavLink>
                    <NavLink to='/gta'>GTA 5 ROLEPALY</NavLink>
                    <NavLink to='/about'>ABOUT US</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="bg-green-600 px-5 py-2 rounded-lg text-lg font-bold text-white">SHOP</button>
            </div>
        </div>
    );
};

export default Navbar;