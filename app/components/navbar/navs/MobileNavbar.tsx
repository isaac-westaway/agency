import { useState, useCallback, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, useAnimate } from 'framer-motion';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import{ BiSun, BiMoon } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'


import Logo from '../Logo';

const MobileNavbar: React.FC = () => {

    const [NavOpen, setNavOpen] = useState(false);
    const [textColor, setTextColor] = useState('white');

    const [darkMode, setDarkMode] = useState(false);

    const [projDropdown, setProjDropdown] = useState(false);

    const toggleProjDropdown = () => {
        setProjDropdown(!projDropdown);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleOpen = useCallback(() => {
        setTimeout(() => {       
            setNavOpen((value) => !value);
        }, 0);
    }, []);

    useEffect(() => {
        if(NavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [NavOpen])
      
    const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    }    

    return (
        <div className="flex gap-3 items-center justify-around pt-4 py-4">
            <div onClick={toggleDarkMode} className="sm:block sm:hidden z-40">
                {darkMode ? (
                    <BiSun size={27} style={{ color: `${textColor}` }} onClick={toggleDarkMode} />
                ) : (
                    <BiMoon size={27} style={{ color: `${textColor}`}} onClick={toggleDarkMode} />
                )}
            </div>
            <div className="z-50">
                <Logo />
            </div>
            <motion.div onClick={toggleOpen} className='sm:block sm:hidden z-40'>
                {NavOpen ? (
                    <AiOutlineClose size={25} style={{ color: `${textColor}` }}/>
                ) : (
                    <motion.div>
                        <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
                    </motion.div>
                )}
            </motion.div>
            <div
                className={
                    NavOpen
                        ? 'sm:hidden z-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[80px] h-screen text-center ease-in duration-200 bg-black overflow-hidden transition'
                        : 'sm:hidden z-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center pt-[80px] w-full h-screen text-center ease-in duration-200 transition overflow-hidden '
                    }
            >
                {NavOpen && (
                    <motion.ul
                        /*animate="visible"
                        variants={list}*/
                        className="overflow-y-auto overflow-x-hidden scrollAdd w-10/12"
                    >
                        <li onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-[2px] rounded-2xl border-stone-800 py-3 ease-in duration-200 transition'>
                            <Link href='/'>Contact</Link>
                        </li>
                        <div className="border-b-stone-800 border-b-[3px]">
                            <br/>
                        </div>
                        <motion.li variants={item} onClick={toggleOpen} className='flex flex-row gap-3 ease-in duration-200 transition justify-center p-4 text-4xl hover:text-gray-500 border-b-stone-800 border-b-[3px] cursor-pointer'>
                            <Link href='/about-us'>Gallery</Link>
                            {/*
                            <div className="justify-center flex flex-row cursor">
                                <Image src="/chevron-left.svg" alt="chev-down" width="30" height="30"  onClick={toggleProjDropdown}/>
                            </div>
                            */}
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-b-stone-800 border-b-[3px]'>
                            <Link href='/'>Work</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-b-stone-800 border-b-[3px]'>
                            <Link href='/'>Contact</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-b-stone-800 border-b-[3px]'>
                            <Link href='/'>Business</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-b-stone-800 border-b-[3px]'>
                            <Link href='/'>Pricing</Link>
                        </motion.li>

                        <br />

                        <motion.li variants={item} onClick={toggleOpen} className='p-4 text-4xl hover:text-gray-500 border-[2px] rounded-2xl border-stone-800 py-3'>
                            <Link href='/'>Request A demo</Link>
                        </motion.li>
                        <br />
                        <motion.li>
                            <motion.div variants={item} className="flex flex-row gap-8 items-center text-center justify-evenly pt-4 pb-4 border-stone-800 border-b-[3px] border-t-[3px]">
                                <li className="cursor-pointer">
                                    <BsInstagram size={18}/>
                                </li>
                                <li className="cursor-pointer">
                                    <BsFacebook size={18} />
                                </li>
                                <li className="cursor-pointer">
                                    <BsLinkedin size={18}/>
                                </li>
                                <li className="cursor-pointer">
                                    <BsGithub size={18}/>
                                </li>
                            </motion.div>
                            <motion.div variants={item} className="flex flex-row gap-8 items-center text-justify justify-center pt-4 pb-4 border-b-stone-800 border-b-[3px]">
                                <li className="cursor-pointer">
                                    Terms & Conditions
                                </li>
                                <li className="cursor-pointer">
                                    Privacy Policy
                                </li>
                            </motion.div>
                        </motion.li>
                        <div className="flex flex-col pb-[170px]">
                    
                        </div>
                    </motion.ul>)}
            </div>
        </div>
    );
}
 
export default MobileNavbar;