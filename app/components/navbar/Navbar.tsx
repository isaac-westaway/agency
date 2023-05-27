"use client"

import { useMediaQuery } from 'react-responsive';

import DesktopNavbar from './navs/DesktopNavbar';
import MobileNavbar from './navs/MobileNavbar';
import TabletNavbar from './navs/TabletNavbar';
import Container from '../Container';

const Navbar: React.FC = () => {

    const Desktop = useMediaQuery({ minWidth: 1024});
    const Tablet = useMediaQuery({
        minWidth: 640,
        maxWidth: 1023
    });
    const Mobile = useMediaQuery({
        minWidth: 0,
        maxWidth: 640
    });

    return (
        <div className="fixed w-full bg-dark-50 backdrop-blur-sm z-50 shadow-sm text-blue-400">
            <div className="py-4 border-b-[3px] border-light-50">
                <Container>
                    {Desktop && <DesktopNavbar />}
                    {Tablet && <TabletNavbar />}
                    {Mobile && <MobileNavbar />}
                </Container>
            </div>
        </div>
    )
}
 
export default Navbar;