import React, { useState } from 'react';
import { Logo } from '../images'

const Navbar = () => {

    const navItems = ['pricing', 'product', 'about us', 'careers', 'community'];
    const [ toggle, setToggle ] = useState(false);

    const handleToggle = () => {
        setToggle(prev => !prev)
    }

    return (
        <nav className='relative container mx-auto p-6'>
            <div className="flex items-center justify-between">
                <div className='pt-2'>
                    <img src={Logo} alt="logo" />
                </div>

                <div className="hidden md:flex space-x-6">
                    {
                        navItems.map(item => {
                            return (
                                <a key={item} className='capitalize hover:text-darkGrayishBlue transition-all' href="#">
                                    {item}
                                </a>
                            )
                        })
                    }
                </div>

                <button className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed shadow-brightRedLight shadow-md rounded-full baseline hover:bg-brightRedLight transition-all'>
                    Get Started
                </button>

                <button onClick={handleToggle} className={`block hamburger ${toggle && 'open'} cursor-pointer w-[24px] h-[24px]  relative md:hidden focus:outline-none`}>
                    <span className=''></span>
                    <span className=''></span>
                    <span className=''></span>

                </button>
            </div>

            <div className='md:hidden'>
                <div className={`absolute ${toggle ? 'opacity-100': 'opacity-0'} flex flex-col transition-all items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                {
                        navItems.map(item => {
                            return (
                                <a key={item} className='capitalize hover:text-darkGrayishBlue transition-all' href="#">
                                    {item}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
