import React, { useState } from 'react';
import CountrySelector from '../country_selector/CountrySelector'
import { FaAngleDown } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <nav className=" bg-black left-0 top-0">
                <div className="flex flex-wrap mx-auto max-w-screen-xl">
                    <a href="https://trigan.org" className="flex items-center">
                        <img src={"/trigan_logo.svg"} className="mr-12 h-16 sm:h-18" alt="Trigan Logo" />
                    </a>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <div className="dropdown inline-block relative">
                                <button className="peer text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">HOME</span>
                                </button>
                            </div>
                            <div className="dropdown">
                                <button className="peer text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">PROJECT </span>
                                    <FaAngleDown className="h-5 w-4" />
                                </button>
                                <ul className="flex flex-col absolute text-white pt-1 hidden peer-hover:flex hover:flex w-[200px] bg-white rounded-md">
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-t-md" href="https://trigan.org/roadmap">ROADMAD</a>
                                    </li>
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-b-md" href="https://trigan.org/faq">FAQ</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="dropdown">
                                <button className="peer text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">NEWS</span>
                                    <FaAngleDown className="h-5 w-4" />
                                </button>
                                <ul className="flex flex-col absolute text-white pt-1 hidden peer-hover:flex hover:flex w-[200px] bg-white rounded-md">
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-t-md" href="https://trigan.org/news">NEWS</a>
                                    </li>
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-b-md" href="https://trigan.org/blog">BLOG</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="dropdown">
                                <button className="peer text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">TEAM</span>
                                    <FaAngleDown className="h-5 w-4" />
                                </button>
                                <ul className="flex flex-col absolute text-white pt-1 hidden peer-hover:flex hover:flex w-[200px] bg-white rounded-md">
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-t-md" href="https://trigan.org/teams">TEAM</a>
                                        </li>
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-b-md" href="https://trigan.org/contributor">ACHIEVEMENT</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button className="peer text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">JOIN</span>
                                    <FaAngleDown className="h-5 w-4" />
                                </button>
                                <ul className="flex flex-col absolute text-white pt-1 hidden peer-hover:flex hover:flex bg-white rounded-md">
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-t-md" href="https://shapethefuture.trigan.org/">JOBS</a>
                                    </li>
                                    <li className="">
                                        <a className="block hover:bg-black hover:text-white py-2 px-4 whitespace-no-wrap text-black rounded-md" href="https://community.trigan.org/">COMMUNITY</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div>
                                <button
                                    role="button"
                                    className="lg:text-md mx-auto my-5 block w-3/4 cursor-pointer rounded-lg border bg-red-600 px-4 py-2 text-center hover:bg-red-700 md:w-1/2 lg:w-1/2 xl:w-1/2"
                                >
                                    Early Access
                                </button>may
                            </div> */}
                            <CountrySelector />
                        </ul>
                    </div>
                    
                    
                </div>
            </nav>
        </header>
    );
};

export default Header;