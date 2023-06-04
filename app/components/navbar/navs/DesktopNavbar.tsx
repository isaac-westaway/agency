import { useRouter } from 'next/navigation';

import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, } from 'react-icons/ai';
import Logo from '../Logo';

export function MouseOverTest() {
    console.log('Hi')
}

const DesktopNavbar = () => {
    return (
        <div className="text-2xl">
            <div className="w-full flex fixed items-center bg-black z1000 pt-4 py-4">
                <div className="ml-5">
                    <Logo />
                </div>
                <div className="flex flex-row">
                    <div className="cursor-pointer">
                        Home
                    </div>
                    <div className="cursor-pointer">
                        Gallery
                    </div>
                    <div className="cursor-pointer">
                        Pricing
                    </div>
                    <div className="cursor-pointer">
                        Business
                    </div>
                </div>
                <div className="flex flex-row w-full justify-end mr-5">
                    <motion.div className="cursor-pointer">
                        <span className="">Billing Portal</span>
                    </motion.div>
                    <motion.div className="cursor-pointer">
                        <span className="">Contact</span>
                    </motion.div>
                    <motion.div className="cursor-pointer">
                        <span className="">Request a demo</span>
                    </motion.div>
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