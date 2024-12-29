import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import {SearchBar} from '../SearchBar/SearchBar';


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-4">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="flex items-center space-x-8 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `py-2 px-4 rounded-lg duration-200 
                                    ${isActive ? "text-orange-500 font-semibold" : "text-gray-900"}
                                    hover:bg-gray-100 hover:text-orange-700`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `py-2 px-4 rounded-lg duration-200 
                                    ${isActive ? "text-orange-500 font-semibold" : "text-gray-900"}
                                    hover:bg-gray-100 hover:text-orange-700`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/people"
                                className={({ isActive }) =>
                                    `py-2 px-4 rounded-lg duration-200 
                                    ${isActive ? "text-orange-500 font-semibold" : "text-gray-900"}
                                    hover:bg-gray-100 hover:text-orange-700`
                                }
                            >
                                People
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/ourwork"
                                className={({ isActive }) =>
                                    `py-2 px-4 rounded-lg duration-200 
                                    ${isActive ? "text-orange-500 font-semibold" : "text-gray-900"}
                                    hover:bg-gray-100 hover:text-orange-700`
                                }
                            >
                                Our Work
                            </NavLink>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <div className="flex items-center space-x-4">
                       <SearchBar/>
                        {/* Buttons */}
                        <Link
                            to="/Login"
                            className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
