import { useState } from 'react';

import { navItems } from "../../../data/navbar";

import NavMenu from './NavMenu';
import logoIcon from '../../../assets/logo-icon.png';
import Hamburger from "../../icons/Hamburger";

const Navbar = () => {

    const [isBgColorActive, setIsBgColorActive] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 190) {
            setIsBgColorActive(true);
        } else {
            setIsBgColorActive(false);
        }
    }

    window.addEventListener('scroll', changeColor);


    return(
        <nav
            className={`${isBgColorActive ? 'bg-main-blue' : ''} fixed flex w-full items-center justify-between px-2 py-4
            z-50
            lg:border-b-[1px] lg:border-zinc-500 lg:px-12 
            xl:py-6 xl:px-20 transition-all duration-300`}
        >

            <div className='w-36'>
                <img 
                    src={logoIcon}
                    alt="logo icon"
                    className=''
                />
            </div>

            <NavMenu items={navItems} />

            <Hamburger />

            <div
                className="hidden lg:flex items-center justify-center"
            >
                <a
                    href="#tickets"
                    className="p-4 w-fit text-md text-main-gold font-bold rounded-md border-[2px] border-main-blue
                        hover:border-main-gold transition-colors duration-300"
                >
                    COMPRAR INGRESSOS
                </a>
            </div>
        </nav>
    )
}

export default Navbar;