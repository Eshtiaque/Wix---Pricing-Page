import React from 'react';
import { CiGlobe } from "react-icons/ci";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><details>
                        <summary>Creation</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li><details>
                        <summary>Business</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li><details>
                        <summary>Growth</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Enterprise</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Support</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl font-black font-serif">WiX</a>
                {/* //////////////////////////// */}
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><details>
                        <summary>Creation</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li><details>
                        <summary>Business</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li><details>
                        <summary>Growth</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </details></li>
                    <li className='pe-4'>
                        <details>
                            <summary>Resources</summary>
                            <ul className="p-2 ">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <div className='border-l-[2px] px-2 '></div>
                    <li><a>Enterprise</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Support</a></li>

                </ul>
            </div>
            </div>
            
            <div className="navbar-end">
            <CiGlobe className='text-2xl mr-4'/>
                <a className="btn border-blue-400 text-blue-400 btn-sm rounded-full px-12">Sign in</a>
            </div>
        </div>
    );
};

export default Navbar;