"use client";

import { useState } from 'react';

import Logo from "../../Logo";
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

const TabletNavbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-row pt-4 py-4  text-neutral-500">
            <div className="h-full w-full">
                <ul className="flex flex-row justify-evenly items-center">
                    <div className="h-full items-center flex shrink-0">
                        <Logo />
                    </div>
                    <li className="inline-block">
                        <Link className="text-2xl animatedUnderline cursor-pointer hover:text-white hover:transition hover:duration-200 flex" href={'/test'}>Pricing</Link>
                    </li>
                    <li className="inline-block">
                        <Link className="text-2xl animatedUnderline cursor-pointer hover:text-white hover:transition hover:duration-200 flex" href={'/about-us'}>Gallery</Link>
                    </li>
                    <li className="inline-block">
                        <Link className="text-2xl animatedUnderline cursor-pointer hover:text-white hover:transition hover:duration-200 flex" href={'/test'}>Blog</Link>
                    </li>
                    <li className="inline-block">
                        <Link className="special-border-name text-2xl border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6] z-50 flex" href={'/'}>
                            Contact
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link className="special-border-name text-2xl border-[2px] border-stone-800 transition ease-in duration-200 rounded-2xl p-2 px-[24px] hover:border-[#FBFAF6] hover:text-[#FBFAF6] flex" href={'/test'}>Billing Portal&nbsp;<span className="flex flex-row items-center pb-1"><FiExternalLink /></span></Link>
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