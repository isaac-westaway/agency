import { useRouter } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi'

import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, } from 'react-icons/ai';
import Logo from '../../Logo';

const DesktopNavbar = () => {
    return (
        <div className="w-full bg-black z1000 pt-4 py-4 text-xl  text-neutral-500">
            <div className="flex items-center pl-11 pr-11 justify-between w-full">
                <div className="shrink-0">
                    <Logo />
                </div>
                <div className="flex flex-row gap-11 items-center">
                        <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">Pricing</span>
                        <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">Gallery</span>
                        <span className="cursor-pointer animatedUnderline hover:text-white hover:transition hover:duration-200">Blog</span>
                        <span className="cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">Contact</span>
                        <span className="cursor-pointer special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">Request a demo</span>
                        <span className="cursor-pointer flex items-center special-border-name border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6]">Billing portal&nbsp;<span className="flex flex-row items-center pb-1"><FiExternalLink /></span></span>
                </div>
            </div>
        </div>
    );
}
 
export default DesktopNavbar; 
/*                       
<motion.div
    onMouseOver={MouseOverTest}
    onClick={() => {router.push('/about-us')}}
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3}}                    
>
    <AiFillGithub size={35} className="cursor-pointer"/>
</motion.div>
<motion.div
    onClick={() => {router.push('/')}}
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3}}                     
>
    <AiFillLinkedin size={35} className="cursor-pointer"/>
</motion.div>
<motion.div
    whileHover={{ scale: [null, 1.5, 1.4] }}
    transition={{ duration: 0.3}}                     
>
    <AiOutlineTwitter size={35} className="cursor-pointer"/>
</motion.div>*/