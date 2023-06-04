import { useRouter } from 'next/navigation';

import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter, } from 'react-icons/ai';

export function MouseOverTest() {
    console.log('Hi')
}

const DesktopNavbar = () => {
    return (
        <div className="py-4 z1000 border-b-white border-b-[3px] w-full flex items-center justify-around">

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