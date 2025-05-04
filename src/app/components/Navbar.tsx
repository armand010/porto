"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import MenuOverlay from './MenuOverlay'

const navlink = [
    {
        href: "/about",
        title: "About",
    },
    {
        href: "/projects",
        title: "Projects",
    },
    {
        href: "/contact",
        title: "Contact",
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 opacity-90 bg-black px-2 sm:px-10'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-5 py-2'>
                <Link href={"/"} className='text-xl md:text-2xl py-3 px-3 text-white font-semibold'>
                    Logo
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !isOpen ? (
                            <button className='flex items-center h-9 w-9 px-2 py-2 border rounded border-slate-400 text-slate-400 hover:text-white hover:border-white' 
                                onClick={() => setIsOpen(true)}>
                                <Bars3Icon className='h-6 w-6'/>
                            </button> 
                        ) : (
                            <button className='flex items-center h-9 w-9 px-2 py-2 border rounded border-slate-400 text-slate-400 hover:text-white hover:border-white'
                                onClick={() => setIsOpen(false)}>
                                <XMarkIcon className='h-6 w-6'/>
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'> 
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navlink.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen ?  <MenuOverlay links={navlink} /> : null}
        </nav>
    )
}

export default Navbar
