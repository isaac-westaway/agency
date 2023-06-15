"use client"

import { useState, useEffect } from 'react';

import DesktopNavbar from './navs/DesktopNavbar';
import MobileNavbar from './navs/MobileNavbar';
import TabletNavbar from './navs/TabletNavbar';
import Container from '../Container';

import { useDesktop, useTablet, useMobile } from '@/app/components/utils/mediaQueries';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const Desktop = useDesktop();
    const Tablet = useTablet();
    const Mobile = useMobile();

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full bg-black z-50 shadow-2xl ${scrolled ? 'border-b-[1px] border-dark-50 transition duration-500 ease-in-out' : 'transition duration-500 ease-in-out border-b-[1px] border-transparent'}`}>
            <div className="">
                <Container>
                    {Tablet &&
                        <motion.div                             
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TabletNavbar />
                        </motion.div>
                    }
                    {Mobile &&                         
                        <motion.div                             
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MobileNavbar />
                        </motion.div>
                    }
                                        {Desktop && 
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DesktopNavbar />
                        </motion.div>
                    }
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
