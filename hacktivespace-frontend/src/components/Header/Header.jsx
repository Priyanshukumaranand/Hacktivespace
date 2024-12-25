import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TERipple } from 'tw-elements-react';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';

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
                    </ul>

                    {/* Search Bar */}
                    <div className="flex items-center space-x-4">
                        <div className="relative flex items-center">
                            <input
                                type="search"
                                className="w-48 border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1"
                            />
                            <TERipple color="light">
                                <button
                                    className="bg-orange-700 text-white px-4 py-2 rounded-r-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    type="button"
                                    id="button-addon1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </TERipple>
                        </div>

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
