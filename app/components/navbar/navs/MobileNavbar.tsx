import { useState, useCallback, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';

import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import{ BiSun, BiMoon } from 'react-icons/bi';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

import Logo from '../../Logo';
import React from 'react';

const MobileNavbar = () => {

    const [NavOpen, setNavOpen] = useState(false);
    const [textColor, setTextColor] = useState('white');

    const [darkMode, setDarkMode] = useState(false);

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
    }, [NavOpen]);
      
    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    };

    const Router = useRouter();

    function billingRedirect() {
        Router.push("https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE");
    }

    function handleDappRedirect() {
        Router.push("/d-app");
        toggleOpen()
    }

    return (
        <div className="flex gap-3 items-center justify-evenly pt-4 py-4">
            <div onClick={toggleDarkMode} className="sm:block sm:hidden z-50 cursor-pointer">
                {darkMode ? (
                    <BiSun size={27} style={{ color: `${textColor}` }} onClick={toggleDarkMode} />
                ) : (
                    <BiMoon size={27} style={{ color: `${textColor}`}} onClick={toggleDarkMode} />
                )}
            </div>
            <div className="z-50">
                <Logo />
            </div>
            <motion.div onClick={toggleOpen} className='sm:block sm:hidden z-50 cursor-pointer'>
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
                        ? 'sm:hidden z-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full pt-[80px] h-screen text-start ease-in duration-150 bg-black overflow-hidden transition'
                        : 'sm:hidden z-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center pt-[80px] w-full h-screen text-center ease-in duration-150 transition overflow-hidden '
                    }
            >
                {NavOpen && (
                    <motion.ul
                        /*animate="visible"
                        variants={list}*/
                        className="overflow-y-auto overflow-x-hidden scrollAdd w-10/12 transition ease-in duration-1000"
                    >
                        <li onClick={toggleOpen} className='cursor-pointer p-4 text-2xl border-[2px] hover:text-[#FBFAF6] rounded-2xl text-center hover:border-[#FBFAF6] hover:border-[2px] border-stone-800 py-3 ease-in duration-200 transition'>
                            <Link href='/'>Contact</Link>
                        </li>

                        <div className="border-b-stone-800 border-b-[3px]">
                            <br/>
                        </div>

                        
                        <motion.li variants={item} onClick={toggleOpen} className='p-2 text-2xl transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6'>
                            <Link href='/'>Home</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={billingRedirect} className='flex flex-row transition ease-in duration-150 p-2 text-2xl border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6'>
                            <Link href='https://billing.stripe.com/p/login/7sI7sJeI4eTm8X6aEE' className="flex flex-row justify-end place-items-end items-center whitespace-nowrap">Billing Portal</Link>
                            <div className="flex flex-row items-center justify-end w-full">
                                <FiExternalLink />
                            </div>
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-2 text-2xl transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6'>
                            {/*<ThemeProvider theme={theme}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="border-green-50">
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                        Collapsible Group Item #3
                                    </AccordionSummary>
                                    <AccordionDetails className="border-green-50">
                                        <div className="border-green">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            
                            </ThemeProvider>*/}
                            <Link href='/test' className="w-full">Gallery</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={handleDappRedirect} className='p-2 text-2xl transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6'>
                            <Link href='/d-app'>D-App</Link>
                        </motion.li>

                        <motion.li variants={item} onClick={toggleOpen} className='p-2 text-2xl transition ease-in duration-150 border-b-stone-800 border-b-[3px] cursor-pointer hover:bg-gray-0.6'>
                            <Link href='/'>Business</Link>
                        </motion.li>

                        <br />

                        <motion.li variants={item} onClick={toggleOpen} className=' items-center cursor-pointer p-4 text-2xl border-[2px] hover:text-[#FBFAF6] rounded-2xl text-center hover:border-[#FBFAF6] hover:border-[2px] border-stone-800 py-3 ease-in duration-200 transition'>
                            <Link href='/' className="items-center">Request A demo</Link>
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
                                <li className="cursor-pointer hover:text-[#FBFAF6] transition ease-in-out">
                                    Terms & Conditions
                                </li>
                                <li className="cursor-pointer hover:text-[#FBFAF6] transition ease-in-out">
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