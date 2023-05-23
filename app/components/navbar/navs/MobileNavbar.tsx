import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import{ BiSun, BiMoon } from 'react-icons/bi';

import Logo from '../Logo';

import Image from 'next/image';

import { motion, useAnimate } from 'framer-motion';

const MobileNavbar: React.FC = () => {

    const [nav, setNav] = useState(false);
    const [textColor, setTextColor] = useState('white');

    const [darkMode, setDarkMode] = useState(false);

    const [projDropdown, setProjDropdown] = useState(false);

    const toggleProjDropdown = () => {
        setProjDropdown(!projDropdown);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleNav = () => {
        setNav(!nav);
    };

    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }
      
    const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    }    

    return (
        <div className="flex items-center justify-around z-40">
            <div onClick={toggleDarkMode} className="sm:block sm:hidden z-40">
                {darkMode ? (
                    <BiSun size={27} style={{ color: `${textColor}` }} onClick={toggleDarkMode} />
                ) : (
                    <BiMoon size={27} style={{ color: `${textColor}`}} onClick={toggleDarkMode} />
                )}
            </div>
            <Logo />
            <motion.div onClick={handleNav} className='sm:block sm:hidden z-40'>
                {nav ? (
                    <AiOutlineClose size={25} style={{ color: `${textColor}` }} onClick={handleNav}/>
                ) : (
                    <motion.div>
                        <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
                    </motion.div>
                )}
            </motion.div>

            <div
                className={
                    nav
                        ? 'sm:hidden z-30 absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[80px] h-screen text-center ease-in duration-300 '
                        : 'sm:hidden z-30 absolute top-0 left-[100%] right-0 bottom-0 flex justify-center pt-[80px] w-full h-screen text-center ease-in duration-300 '
            }
            >
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={list}
                className="overflow-y-auto overflow-x-hidden scrollAdd"
            >
                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50 bg-dark-50'>
                    <Link href='/'>Home</Link>
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='flex flex-row gap-3 justify-center p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50 cursor-pointer bg-dark-50'>
                    <Link href='/about-us'>Gallery</Link>
                    {/*
                    <div className="justify-center flex flex-row cursor">
                        <Image src="/chevron-left.svg" alt="chev-down" width="30" height="30"  onClick={toggleProjDropdown}/>
                    </div>
                    */}
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50 bg-dark-50'>
                    <Link href='/'>Work</Link>
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50'>
                    <Link href='/'>Contact</Link>
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50'>
                    <Link href='/'>Business Solutions</Link>
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 border-b-[3px] border-light-50'>
                    <Link href='/'>Pricing</Link>
                </motion.li>

                <motion.li variants={item} onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 pb-8 '>
                    <Link href='/'>Request A demo</Link>
                </motion.li>
                <br />
                <motion.li>
                    <motion.div variants={item} className="flex flex-row gap-8 items-center justify-center pt-4 pb-4 border-b-[3px] border-t-[3px] border-light-50">
                        <li className="cursor-pointer">
                            Contact Us
                        </li>
                        <li className="cursor-pointer">
                            Github
                        </li>
                    </motion.div>
                    <motion.div variants={item} className="flex flex-row gap-8 items-center justify-center pt-4 pb-4 border-b-[3px] border-light-50">
                        <li className="cursor-pointer">
                            Terms & Conditions
                        </li>
                        <li className="cursor-pointer">
                            Privacy Policy
                        </li>
                    </motion.div>
                </motion.li>
                <div className="flex flex-col pb-[190px]">
            
                </div>
            </motion.ul>
            </div>
        </div>
    );
}
 
export default MobileNavbar;