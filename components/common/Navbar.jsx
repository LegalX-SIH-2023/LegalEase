"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    let Links = [
        { name: "Home", link: "#hero" },
        { name: "About", link: "#about" },
        { name: "Project", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className=''>
            <div className='md:flex items-center justify-between py-2 2xl:py-4 md:px-10 px-7 pt-6 z-20'>
                <div className='font-bold text-3xl flex items-center'>
                    <span className='text-[#D47C42]'>Legal</span><span className='text-primary-navy'>Connect</span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden text-white'>
                    {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>

                {/* <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[55px]' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='font-semibold text-white hover:text-[#7f6abe] duration-500' onClick={()=> setOpen(false)}>{link.name}</a>
                            </li>
                        ))
                    }
                    <a href="Your link to mail"><button className='font-semibold p-2 mr-[-6px] border-2 border-white rounded-xl hover:text-[#7f6bae] duration-500 text-white text-xl md:ml-7' onClick={() => setOpen(false)}>Get Started</button></a>
                </ul> */}
                <div className='z-20'>

                    <button className='font-semibold p-2 mr-[-6px] text-primary-navy text-xl md:ml-7'>Sign in</button>
                    <button className='font-semibold p-2 mr-[-6px] bg-primary-navy rounded-xl text-white text-xl md:ml-7 hover:shadow-xl'>Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar