import { useRouter } from 'next/navigation';

import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, } from 'react-icons/ai';

export function MouseOverTest() {
    console.log('Hi')
}

const DesktopNavbar = () => {

    const router = useRouter();

    return (
        <div className="relative">
            <div 
                className="
                    
                "
            >
                <div 
                    className="flex flex-row items-center gap-3 px-4"
                >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
 
export default DesktopNavbar;