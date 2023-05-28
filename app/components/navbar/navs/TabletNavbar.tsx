import Logo from "../Logo";

const TabletNavbar = () => {
    return (
        <div className="flex flex-row pt-4 py-4">
            <div className="h-full w-full">
                <ul className="flex flex-row justify-evenly">
                    <div className="h-full items-center">
                        <Logo />
                    </div>
                    <li className="inline-block">
                        <a href="/about-us" className="tabletBorder text-2xl pt-1 hover:border-white">Home</a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl hover:border-white">Gallery</a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl hover:border-white">Pricing</a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl hover:border-white">Business</a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl border-stone-800 border-[2px] rounded-2xl px-4 hover:border-white hover:text-white z-50 hover:z-50">Contact</a>
                    </li>
                    <li className="inline-block">
                        <a className="tabletBorder text-2xl border-stone-800 border-[2px] rounded-2xl px-4 hover:border-white hover:text-white z-50 hover:z-50">Request a demo</a>
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