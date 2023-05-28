"use client";

import { useState } from 'react';

import Logo from "../Logo";

const TabletNavbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-row pt-4 py-4">
            <div className="h-full w-full">
                <ul className="flex flex-row justify-evenly">
                    <div className="h-full items-center">
                        <Logo />
                    </div>
                    <li className="inline-block">
                        <a href="/about-us" className="text-2xl pt-1 animatedUnderline">Home</a>
                    </li>
                    <li className="inline-block">
                        <a className="text-2xl pt-1 animatedUnderline cursor-pointer">Gallery</a>
                    </li>
                    <li className="inline-block">
                        <a className="text-2xl pt-1 animatedUnderline cursor-pointer">Pricing</a>
                    </li>
                    <li className="inline-block">
                        <a className="text-2xl pt-1 animatedUnderline cursor-pointer">Business</a>
                    </li>
                    <li className="inline-block">
                        <a 
                            className="tabletBorder text-2xl border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl px-4 hover:border-[#FBFAF6] hover:text-[#FBFAF6] z-50"    
                        >
                            Contact
                        </a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl px-4 hover:border-[#FBFAF6] hover:text-[#FBFAF6] z-50">Request a demo</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default TabletNavbar;

{/*
<li className="inline-block">
<a className="border-[3px] border-orange-500 text-2xl rounded-full pr-3 pl-2 text-orange-500 hover:text-white transition hover:bg-orange-500 cursor-pointer">Request a demo</a>
</li>*/}