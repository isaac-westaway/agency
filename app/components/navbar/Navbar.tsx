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
        <div className="fixed w-full bg-dark-50 z-50 shadow-sm text-neutral-500">
            <div className="">
                <Container>
                    {Desktop && <DesktopNavbar />}
                    {Tablet && <TabletNavbar /> }
                    {Mobile && <MobileNavbar />}
                </Container>
            </div>
        </div>
    )
}
 
export default Navbar;